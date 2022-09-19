import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';

const ProductCard = ({item, index, addHandler}) => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.info_container}>
        <Text> {item.title} </Text>
        <Text> $ {item.price} </Text>
        <Button title="Add" onPress={() => addHandler(item)} />
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
    backgroundColor: '#dcdcdc',
  },
  image_container: {},
  image: {height: 100, width: 100},
  info_container: {flex: 1, justifyContent: 'space-between'},
  title: {},
  price: {},
  button: {},
});
