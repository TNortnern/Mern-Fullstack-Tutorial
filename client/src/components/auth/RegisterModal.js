import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from "reactstrap";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

   const handleToggle = useCallback(() => {
     // Clear errors
     dispatch(clearErrors());
     setModal(!modal);
   }, [modal, dispatch]);

  useEffect(() => {
     setMsg(null);
     if (error && error.id) {
       if (error.id === "REGISTER_FAIL") {
         setMsg(error.msg.msg);
       } else {
       }
     }
    if (modal) {
      if (isAuthenticated) {
        handleToggle()
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    // Attempt to register
    dispatch(register(user));
  };
  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Label for="password">Password</Label>
              <Input
                type="passwpord"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Register
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
