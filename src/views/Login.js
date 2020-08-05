import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import { withFirebase } from "../firebase";

const Login = (props) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues;
    props.firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setFormValues({ email: "", password: "" });
        props.history.push("/");
      })
      .catch((err) => setErrMessage(err.message));
  };

  const signInWithProvider = (provider) =>
    props.firebase
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        console.log("cred", credential);
      })
      .catch((error) => {
        const email = error.email;
        console.log(email, error);
      });

  return (
    <Container>
      <Row>
        <Col>
          <Card className="p-3 text-center">
            <CardBody>
              <div className="mb-4">
                <Button onClick={() => signInWithProvider("google")}>
                  Google
                </Button>
                <Button className="mx-2">Facebook</Button>
                <Button>GitHub</Button>
              </div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                  placeholder="email"
                  className="mb-3"
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                  value={formValues.email}
                />
                <Input
                  type="password"
                  placeholder="password"
                  onChange={(e) =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                  value={formValues.password}
                />
                <small className="text-right d-block">
                  Forgot your password?
                </small>
                <Button className="btn-block mt-3" type="submit">
                  Log in
                </Button>
              </Form>
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

export default withFirebase(Login);
