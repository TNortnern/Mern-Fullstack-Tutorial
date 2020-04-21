import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getItems,deleteItem } from "../actions/itemActions";

const ShoppingList = () => {
    useEffect(() => {
      if (!items.length) {
        dispatch(getItems())
      }
    })
  const items = useSelector(state => state.item.items);
  const dispatch = useDispatch();
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className={"remove-btn"}
                  color="danger"
                  size="sm"
                  onClick={() => {
                    dispatch(deleteItem(_id));
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
