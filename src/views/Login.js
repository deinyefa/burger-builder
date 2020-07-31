import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Input, Row } from "reactstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-3 text-center">
            <CardBody>
              <div className="mb-4">
                <Button>Google</Button>
                <Button className="mx-2">Facebook</Button>
                <Button>GitHub</Button>
              </div>
              <Input placeholder="Username" className="mb-3" />
              <Input type="password" placeholder="password" />
              <small className="text-right d-block">
                Forgot your password?
              </small>
              <Button className="btn-block mt-3">Log in</Button>
              <small className="mt-3 mb-2 d-block">or</small>
              <Link component={Button} color="link" to="/register">
                Sign up
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
