import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import ShoppingCart from "react-bootstrap-icons/dist/icons/cart";
import "../CSS/productsSection.css";
import { customhook } from "../context/store";

const ProductGrid = () => {
  const { products, setcartItems } = customhook()

  return (
    <div className="product-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">
          Featured Electronic Products
        </h2>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} md={6} lg={3}
            // style={{ boxShadow: ' 0 0 25px rgba(0, 255, 255, 0.1' }}
            >
              <Card className="product-card text-center">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={product.img} />
                </div>
                <Card.Body>
                  <h6 className="product-category">{product.category}</h6>
                  <Card.Title className="product-title">
                    {product.name}
                  </Card.Title>
                  <p className="price mb-3">Rs. {product.price}</p>
                  <Button className="add-btn"
                    onClick={() => setcartItems((prev) => [...prev, product])}
                  >
                    <ShoppingCart size={18} className="me-2" />
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductGrid;
