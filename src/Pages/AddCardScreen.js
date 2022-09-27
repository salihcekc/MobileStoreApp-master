import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductCard from '../components/ProductCard';
import React, {useEffect} from 'react';
import {deleteItem} from '../redux/action/ItemAction';

const AddCardScreen = () => {
  const favourite = useSelector(state => state.AddItemReducer.data);
  const itemsCount = useSelector(state => state.AddItemReducer.itemsCount);
  const dispatch = useDispatch();
  const deleteHandler = item => {
    dispatch(deleteItem(item));
  };

  useEffect(() => {
    // console.log(favourite[0].quantity, 'favourite-q');
    // for (let index = 0; index < favourite.length; index++) {
    //   console.log(favourite[index].id);
    // }
    // console.log('*******');
    console.log(itemsCount, '-itemsCount');
  }, [favourite]);

  const renderFavourite = ({item, index}) => {
    return (
      <ProductCard
        item={item}
        index={index}
        title="DELETE"
        pressHandler={deleteHandler}
        quantity={favourite.quantity}
      />
    );
  };

  return (
    <View>
      <FlatList data={favourite} renderItem={renderFavourite} />
    </View>
  );
};

export default AddCardScreen;
