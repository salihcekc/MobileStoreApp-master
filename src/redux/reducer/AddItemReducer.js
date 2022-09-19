const initialState = {
  data: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

export default AddItemReducer;
