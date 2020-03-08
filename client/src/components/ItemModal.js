import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addItem } from "../actions/itemActions";

const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addItem({ name }));
    toggle();
  };
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={e => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Add Item
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
