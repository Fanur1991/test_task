export const fetchProducts = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Unauthorized: Token not found');
    }

    const response = await fetch(
      'http://localhost:1337/api/products?populate=image',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch products');
    }

    return data.data.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image?.url || { url: '' },
    }));
  } catch (error: any) {
    throw new Error(
      error.message || 'An error occurred while fetching products'
    );
  }
};
