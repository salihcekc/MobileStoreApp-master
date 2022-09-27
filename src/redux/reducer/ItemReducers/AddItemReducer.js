import {addItemToCart, deleteItemToCart} from './cartUtils';

const initialState = {
  data: [],
  itemsCount: 0,
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: addItemToCart(state.data, action.payload),
        itemsCount: state.itemsCount + 1,
      };
    case 'DELETE_ITEM':
      const data1 = deleteItemToCart(state.data, action.payload);
      console.log(data1, 'data1');
      return {
        ...state,
        data: [],
        itemsCount: state.itemsCount - 1,
      };
    case 'RESET_ITEM':
      return {
        ...state,
        data: [],
        itemsCount: 0,
      };
    default:
      return state;
  }
};

export default AddItemReducer;
