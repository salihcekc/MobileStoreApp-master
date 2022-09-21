import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';
import React, {useEffect} from 'react';

const AddCardScreen = () => {
  const favourite = useSelector(state => state.AddItemReducer.data);
  useEffect(() => {
    console.log(favourite, 'favourite');
  }, [favourite]);

  const renderFavourite = ({item, index}) => {
    return <ProductCard item={item} index={index} />;
  };

  return (
    <View>
      <FlatList data={favourite} renderItem={renderFavourite} />
    </View>
  );
};

export default AddCardScreen;
