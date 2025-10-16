import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { PencilSquare, CheckCircle, PersonCircle } from "react-bootstrap-icons";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Adrian Khan",
    email: "adrian.khan@example.com",
    phone: "+92 300 1234567",
    role: "Customer",
    address: "Islamabad, Pakistan",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #0a192f 100%)",
        color: "#e0e0e0",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div
              className="p-4 rounded-4 mb-4 text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,224,255,0.4)",
                boxShadow: "0 0 25px rgba(0,224,255,0.1)",
              }}
            >
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-circle mb-3 shadow-lg"
                style={{
                  width: "120px",
                  height: "120px",
                  border: "3px solid #00e0ff",
                  boxShadow: "0 0 20px rgba(0,224,255,0.6)",
                }}
              />
              <h3
                className="fw-bold mb-1"
                style={{
                  color: "#00e0ff",
                  textShadow: "0 0 12px rgba(0,224,255,0.7)",
                }}
              >
                {user.name}
              </h3>
              <p className="text-secondary mb-0">{user.role}</p>
              <p className="text-secondary">{user.email}</p>

              <Button
                variant="outline-info"
                className="rounded-pill mt-3 px-4 py-2 fw-semibold"
                style={{
                  color: "#00e0ff",
                  borderColor: "#00e0ff",
                  boxShadow: "0 0 10px rgba(0,224,255,0.4)",
                }}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <CheckCircle size={18} className="me-2" /> Save Changes
                  </>
                ) : (
                  <>
                    <PencilSquare size={18} className="me-2" /> Edit Profile
                  </>
                )}
              </Button>
            </div>

            {/* === Editable Form === */}
            <Card
              className="p-4 mb-4 rounded-4"
              style={{
                backgroundColor: "rgba(17,34,64,0.7)",
                border: "1px solid rgba(0,224,255,0.3)",
                boxShadow: "0 0 20px rgba(0,224,255,0.1)",
              }}
            >
              <h4
                className="fw-bold mb-4"
                style={{ color: "#00e0ff", textShadow: "0 0 8px rgba(0,224,255,0.6)" }}
              >
                Profile Information
              </h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#9baec8" }}>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    style={{
                      backgroundColor: "#112240",
                      border: "1px solid rgba(0,224,255,0.4)",
                      color: "#e0e0e0",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#9baec8" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    style={{
                      backgroundColor: "#112240",
                      border: "1px solid rgba(0,224,255,0.4)",
                      color: "#e0e0e0",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#9baec8" }}>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    style={{
                      backgroundColor: "#112240",
                      border: "1px solid rgba(0,224,255,0.4)",
                      color: "#e0e0e0",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#9baec8" }}>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    style={{
                      backgroundColor: "#112240",
                      border: "1px solid rgba(0,224,255,0.4)",
                      color: "#e0e0e0",
                      resize: "none",
                    }}
                  />
                </Form.Group>
              </Form>
            </Card>

            {/* === Stats Section === */}
            <Row>
              {[
                { title: "Orders", value: 12, icon: "📦" },
                { title: "Wishlist", value: 5, icon: "💎" },
                { title: "Comments", value: 8, icon: "💬" },
              ].map((stat, i) => (
                <Col md={4} key={i}>
                  <div
                    className="text-center p-4 rounded-4 mb-4"
                    style={{
                      backgroundColor: "#1b263b",
                      border: "1px solid rgba(0,224,255,0.3)",
                      boxShadow: "0 0 15px rgba(0,224,255,0.1)",
                      transition: "0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "32px",
                        color: "#00e0ff",
                        textShadow: "0 0 10px rgba(0,224,255,0.6)",
                      }}
                    >
                      {stat.icon}
                    </div>
                    <h5 className="fw-bold mt-2 mb-1" style={{ color: "#e0e0e0" }}>
                      {stat.value}
                    </h5>
                    <p className="text-secondary">{stat.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Profile;
