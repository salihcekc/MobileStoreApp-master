import {Alert} from 'react-native';
import AddItemReducer from './AddItemReducer';

export const addItemToCart = (items, itemToAdd) => {
  // debugger;
  // if (items.length > 0) {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return items.map(item =>
      item.id === itemToAdd.id
        ? {...itemToAdd, quantity: item.quantity + 1}
        : item,
    );
  } else return [...items, {...itemToAdd, quantity: 1}];
};
// };

// export const deleteItemToCart = (items, itemToDelete) => {
//   debugger;
//   return items.map(item =>
//     item.id === itemToDelete.id
//       ? itemToDelete.quantity > 1
//         ? {...itemToDelete, quantity: itemToDelete.quantity - 1}
//         : items.filter(item => item.id !== itemToDelete.id)
//       : null,
//   );
// };

export const deleteItemToCart = (items, itemToDelete) => {
  debugger;
  var items1 = [];
  items.map(item => {
    if (item.id === itemToDelete.id) {
      if (item.quantity > 1) {
        var data1 = {...itemToDelete, quantity: 0};
        return data1;
      } else return items.filter(item => item.id !== itemToDelete.id);
    }
  });
};
