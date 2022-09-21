import React from 'react';
import {View, Image, Text, StyleSheet, Button, Alert} from 'react-native';

const ProductCard = ({item, index, addHandler}) => {
  return (
    <View key={index} style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.info_container}>
        <Text style={styles.title}> {item.title} </Text>
        <Text style={styles.price}> $ {item.price} </Text>
        <Button
          style={styles.button}
          title="Add"
          onPress={() => {
            addHandler(item);
            Alert.alert('Added');
          }}
        />
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
  image_container: {
    margin: 5,
  },
  image: {height: 120, width: 120},
  info_container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    // backgroundColor: "red",
    padding: 5,
  },
  price: {
    margin: 2,
  },
  button: {},
});
