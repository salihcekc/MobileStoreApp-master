import {addItemToCart, deleteItemToCart} from './cartUtils';

const initialState = {
  data: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: addItemToCart(state.data, action.payload),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        data: deleteItemToCart(state.data, action.payload),
      };
    case 'RESET_ITEM':
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default AddItemReducer;
