export const loginService = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.jwt);
      return data;
    } else {
      const errorMessage = data.error?.message || 'Login failed';
      throw new Error(errorMessage);
    }
  } catch (error: any) {
    throw new Error(
      error.message || 'An unexpected error occurred during login.'
    );
  }
};
