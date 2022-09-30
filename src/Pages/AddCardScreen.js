import {View, Button, FlatList, Text, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductCard from '../components/ProductCard';
import React, {useEffect} from 'react';
import {deleteItem, resetItem} from '../redux/action/ItemAction';

const AddCardScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.tabBar_container}>
          <Button color="#DFF6FF" onPress={resetHandler} title="🗑️" />
          <Button color="#256D85" onPress={logOut} title="Log Out" />
        </View>
      ),
    });
  }, [navigation]);

  const logOut = () => {
    navigation.navigate('Login');
  };

  const favourite = useSelector(state => state.AddItemReducer.data);
  const dispatch = useDispatch();
  const deleteHandler = item => {
    dispatch(deleteItem(item));
  };
  const resetHandler = () => {
    dispatch(resetItem());
  };
  useEffect(() => {
    console.log(favourite, 'favourite');
  });

  const renderFavourite = ({item}) => {
    return <ProductCard item={item} pressHandler={deleteHandler} title="DELETE" />;
  };

  return (
    <View style={styles.container}>
      {favourite.length > 0 ? (
        <FlatList data={favourite} renderItem={renderFavourite} keyExtractor={item => item.id.toString()} />
      ) : (
        <View style={styles.text_container}>
          <Text style={styles.text}>No Product</Text>
        </View>
      )}
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  tabBar_container: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    margin: 5,
    width: '75%',
  },
  container: {
    flex: 1,
    backgroundColor: '#06283D',
    justifyContent: 'center',
  },
  text_container: {
    alignItems: 'center',
  },
  text: {
    color: '#DFF6FF',
    fontWeight: 'bold',
    fontSize: 32,
  },
});
