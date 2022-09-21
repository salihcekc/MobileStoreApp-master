const initialState = {
  data: [],
};

const AddItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload],
        // data:
        //   state.data.includes(action.payload) === false
        //     ? [...state.data, action.payload]
        //     : [
        //         ...state.data,
        //         state.data.splice(state.data.lastIndexOf(action.payload), 1),
        //       ],
      };

    default:
      return state;
  }
};

export default AddItemReducer;
