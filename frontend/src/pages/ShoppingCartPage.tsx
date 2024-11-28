import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ShoppingCart: React.FC = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add dynamic cart items here */}
          <tr>
            <td>1</td>
            <td>Sample Product</td>
            <td>$10</td>
            <td>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ShoppingCart;
