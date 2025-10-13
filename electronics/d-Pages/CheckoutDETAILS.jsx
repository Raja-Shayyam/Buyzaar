import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { CreditCard, Truck, Cash, ArrowRightCircle } from "react-bootstrap-icons";
import "../CSS/CheckDetails.css";

const CheckoutSection = () => {
  const [payment, setPayment] = useState("card");

  const cartItems = [
    { id: 1, name: "Smart LED TV 55”", qty: 1, price: 95000 },
    { id: 2, name: "Wireless Headphones", qty: 2, price: 18000 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <section className="checkout-section text-light py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">
          Secure <span className="brand-glow">Checkout</span>
        </h2>

        <Row className="gy-4">
          {/* Left Column — Form */}
          <Col lg={8}>
            <div className="checkout-form p-4 rounded-4">
              <h5 className="mb-4 fw-semibold brand-glow-text">Shipping Details</h5>

              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="example@mail.com" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="+92 300 1234567" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Islamabad" required />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="address">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control type="text" placeholder="House #123, Street 45" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="state">
                      <Form.Label>State / Province</Form.Label>
                      <Form.Control type="text" placeholder="Punjab" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="zip">
                      <Form.Label>ZIP / Postal Code</Form.Label>
                      <Form.Control type="text" placeholder="44000" />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="mt-3">
                    <Form.Label>Delivery Option's</Form.Label>
                    <div className="d-flex justify-content-between mt-2">
                      <div className="d-inline-flex">
                        <Form.Check
                          type="radio"
                          name="delivery"
                          id="standard"
                          label="Standard (3–5 days)"
                          defaultChecked
                        />
                        <span style={{ textDecorationLine: 'underline', color: '#0087ff', marginLeft: '8px' }}> *no rates</span>
                      </div>
                      <div className="d-inline-flex">
                        <Form.Check
                          type="radio"
                          name="delivery"
                          id="express"
                          label="Express (1–2 days) *extra 500"
                        />
                        <span style={{ textDecorationLine: 'underline', color: '#0087ff', marginLeft: '8px' }}> *extra 500</span>
                      </div>

                    </div>
                  </Col>
                </Row>

                <hr className="my-4 border-light" />

                <h5 className="mb-3 fw-semibold brand-glow-text">Payment Method</h5>
                <div className="payment-options d-flex flex-wrap gap-3 mb-4">
                  <Card
                    className={`payment-card ${payment === "card" ? "active" : ""}`}
                    onClick={() => setPayment("card")}
                  >
                    <CreditCard size={24} />
                    <span>Credit / Debit Card</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "cod" ? "active" : ""}`}
                    onClick={() => setPayment("cod")}
                  >
                    <Cash size={24} />
                    <span>Cash on Delivery</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "bank" ? "active" : ""}`}
                    onClick={() => setPayment("bank")}
                  >
                    <Truck size={24} />
                    <span>Bank Transfer</span>
                  </Card>
                </div>

                {payment === "card" && (
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="expiry">
                        <Form.Label>Expiry</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" required />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="password" placeholder="***" required />
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                <Button type="submit" className="checkout-btn mt-2">
                  Place Order <ArrowRightCircle className="ms-2" />
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Column — Order Summary */}
          <Col lg={4}>
            <div className="order-summary p-4 rounded-4">
              <h5 className="fw-bold mb-3 text-danger">Final Summary !</h5>
              <ul className="list-unstyled mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="d-flex justify-content-between mb-2">
                    <span>
                      {item.name} <small>x{item.qty}</small>
                    </span>
                    <span>Rs. {(item.price * item.qty).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-light" />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Rs. {shipping}</span>
              </div>
              <hr className="border-light" />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span className="brand-glow-text">Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckoutSection;
