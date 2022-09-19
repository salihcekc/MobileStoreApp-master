import {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  Image,
  Button,
} from 'react-native';
import React from 'react';
import ProductCard from '../components/ProductCard';

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderData = ({item, index}) => {
    return (
      // <ProductCard item={item} index={index} />
      <View
        key={index}
        style={{
          flex:1,
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
          margin: 10,
          backgroundColor: '#dcdcdc',
        }}>
        <View>
          <Image style={{height: 100, width: 100}} source={{uri: item.image}} />
        </View>
        <View style={{flex: 1, justifyContent: "space-between"}}>
          <Text> {item.title} </Text>
          <Text> $ {item.price}  </Text>
          <Button title='Add' />
        </View>
      </View>
    );
  };

  const getData = async () => {
    setLoading(true);
    await fetch('https://fakestoreapi.com/products')
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
      <View>
        {loading === true ? <ActivityIndicator size="large" /> : null}
      </View>
      <View>
        <FlatList data={data} renderItem={renderData} />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
