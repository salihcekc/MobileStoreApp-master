import React from 'react';
import {View, Image, Text, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteItem, addItem} from '../redux/action/ItemAction';

const ProductCard = ({item, pressHandler, title}) => {
  const dispatch = useDispatch();
  const Increament = item => {
    dispatch(addItem(item));
  };
  const Decreament = item => {
    dispatch(deleteItem(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: item.images[0]}} />
      </View>
      <View style={styles.info_container}>
        <View style={styles.info}>
          <View style={styles.title_price}>
            <Text style={styles.title}> {item.title} </Text>
            <Text style={styles.price}> $ {item.price} </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
          {title === 'ADD  TO CART' ? (
            <View style={styles.button_container}>
              <Button
                color="#256D85"
                title={title}
                onPress={() => {
                  pressHandler(item);
                  if (title === 'ADD  TO CART') Alert.alert('Added', item.title);
                }}
              />
            </View>
          ) : null}
          {item.quantity > 0 ? (
            <View style={styles.quantity_container}>
              <View style={styles.dec_button}>
                <Button color="#256D85" title="-" onPress={() => Decreament(item)} />
              </View>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <View style={styles.inc_button}>
                <Button color="#256D85" title="+" onPress={() => Increament(item)} />
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    backgroundColor: '#DFF6FF',
  },
  image_container: {
    flex: 1,
    margin: 5,
  },
  image: {
    marginTop: 10,
    height: 140,
    width: 120,
  },
  info_container: {
    flex: 2,
    padding: 5,
    justifyContent: 'space-between',
  },
  info: {
    flex: 3,
    flexDirection: 'row',
  },
  title_price: {
    flex: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  quantity: {
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
  },
  button_container: {
    margin: 10,
    alignItems: 'flex-end',
    width: '100%',
    padding: 5,
  },
  dec_button: {
    marginRight: 5,
  },
  inc_button: {
    marginLeft: 5,
  },
});
