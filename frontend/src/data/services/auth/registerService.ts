export const registerService = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error?.message || 'Registration failed');
    }
  } catch (error: any) {
    throw new Error(
      error.message || 'An unexpected error occurred during registration.'
    );
  }
};
