import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CheckCircle, Cpu, LightningCharge, ShieldLock } from "react-bootstrap-icons";
import "../CSS/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section text-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="mb-5 mb-md-0">
            <div className="about-image-wrap position-relative">
              <img
                src="https://images.unsplash.com/photo-1451958683454-47a7f2adc864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073"
                // src="https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="About Brand"
                className="img-fluid rounded-4 shadow-lg about-image"
              />
              <div className="about-glow"></div>
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6} className="about-image-wrap">
            <h2 className="fw-bold mb-3">
              {/* About <span className="brand-glow">ElectroSphere</span> */}
              About <span className="brand-glow">BuyZaar</span>
            </h2>
            <p className="text-secondary mb-4">
              At BuyZaar, we believe in pushing the boundaries of innovation. 
              From home appliances to smart devices, our mission is to empower 
              people through intelligent design, seamless connectivity, and trusted performance.
            </p>

            <Row className="mb-4">
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <Cpu size={22} color="#00c6ff" />
                  <span>Cutting-edge Tech</span>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <LightningCharge size={22} color="#00c6ff" />
                  <span>Energy Efficient</span>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <ShieldLock size={22} color="#00c6ff" />
                  <span>Secure Systems</span>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle size={22} color="#00c6ff" />
                  <span>Certified Quality</span>
                </div>
              </Col>
            </Row>

            <Button
              variant="light"
              className="px-4 py-2 fw-semibold cta-btn"
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
