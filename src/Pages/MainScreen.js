import {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Text, Button} from 'react-native';
import {addItem} from '../redux/action/ItemAction';
import {useDispatch} from 'react-redux';
import React from 'react';
import ProductCard from '../components/ProductCard';

const MainScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button color="#256D85" onPress={() => navigation.navigate('Login')} title="Log Out" />,
    });
  }, [navigation]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addHandler = item => {
    dispatch(addItem(item));
  };
  const renderData = ({item}) => {
    return <ProductCard item={item} pressHandler={addHandler} title="ADD  TO CART" />;
  };

  const getData = async () => {
    setLoading(true);
    await fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
    setLoading(false);
  };

  useEffect(() => {
    console.log(data, 'data');
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View>{loading === true ? <ActivityIndicator size="large" /> : null}</View>
      <View style={styles.cart_container}>
        <FlatList data={data} renderItem={renderData} keyExtractor={item => item.id.toString()} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06283D',
    justifyContent: 'center',
    flex: 1,
  },
  button_container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button: {
    padding: 10,
    margin: 10,
    width: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cart_container: {
    flex: 9,
  },
});
