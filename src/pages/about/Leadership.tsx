import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';




export const Leadership: React.FC = () => {
 return (
    <section className="py-5 bg-navy text-white" style={{ backgroundColor: '#1a2b4b' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-pill bg-secondary text-white">Technology & Innovation</span>
          <h2 className="fw-bold mt-3">Building The Future With <span className="text-yellow">Cutting-Edge Technology</span></h2>
        </div>
        
        <Row className="g-4">
          <Col md={4}>
            <Card className="bg-dark text-white border-secondary p-4 h-100" style={{ borderRadius: '20px' }}>
              <div className="fs-1 mb-3">💻</div>
              <h4 className="fw-bold">React & Next.js</h4>
              <Badge bg="primary" className="mb-3">Frontend</Badge>
              <p className="text-secondary small">Building performant, scalable web applications with modern React ecosystems.</p>
              <div className="mt-4 pt-3 border-top border-secondary">
                <small className="text-uppercase text-secondary d-block mb-1">Use Case</small>
                <small>Enterprise dashboards and real-time applications.</small>
              </div>
            </Card>
          </Col>
          {/* Repeat for Node.js and PostgreSQL columns */}
        </Row>
      </Container>
    </section>
  );
};