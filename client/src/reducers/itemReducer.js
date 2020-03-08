import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      };
    case ADD_ITEM:
      return { ...state, items: [payload, ...state.items] };
    case DELETE_ITEM:
      return { ...state, items: state.items.filter(each => each._id !== payload) };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
