export const addItemToCart = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return items.map(item => (item.id === itemToAdd.id ? {...itemToAdd, quantity: item.quantity + 1} : item));
  } else return [...items, {...itemToAdd, quantity: 1}];
};

export const deleteItemToCart = (items, itemToDelete) => {
  var existingItem = items.find(item => item.id === itemToDelete.id);
  if (existingItem.quantity > 1) {
    return items.map(item => (item.id === existingItem.id ? {...item, quantity: item.quantity - 1} : item));
  } else return items.filter(item => item.id !== existingItem.id);
};
