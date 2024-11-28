import React, { useEffect, useState } from 'react';
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { fetchProducts } from '../data/services/productService';

interface Product {
  id: number;
  title: string;
  price: number;
  image: { url: string };
}

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log(products);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <Spinner animation='border' />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <Alert variant='danger'>{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className='text-center my-4'>Product Catalog</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} md={4} className='mb-4'>
            <Card>
              <Card.Img
                variant='top'
                src={
                  product.image
                    ? `http://localhost:1337${product.image}`
                    : '/placeholder.png'
                }
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant='primary'>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCatalog;
