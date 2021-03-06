import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
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
import { withFirebase } from "../../firebase";

const SignUpFormBase = (props) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const [user, setUser] = useState();
  const [cred, setCred] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues;
    props.firebase
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setFormValues({ email: "", password: "" });
        props.history.push("/");
      })
      .catch((err) => setErrMessage(err.message));
  };

  const signUpWithProvider = (provider) =>
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
          <Card className="p-3">
            <CardBody>
              <h2>Start ordering burgers</h2>
              <p className="lead">Start ordering from our awesome selection</p>
              <div className="mb-4 text-center">
                <Button onClick={() => signUpWithProvider("google")}>
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
                <Button className="btn-block mt-4" type="submit">
                  Register
                </Button>

                <small className="mt-3 d-block text-center">
                  already have an account?
                </small>
                <Link
                  component={Button}
                  color="link"
                  to="/login"
                  className="text-center d-block mt-2"
                >
                  Login
                </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpForm;
