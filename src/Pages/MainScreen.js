import {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {addItem} from '../redux/action/ItemAction';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import ProductCard from '../components/ProductCard';

const MainScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addHandler = item => {
    dispatch(addItem(item));
  };
  const favourite = useSelector(state => state.AddItemReducer.data);

  const renderData = ({item, index}) => {
    return (
      <ProductCard item={item} index={index} addHandler={addHandler} />
      // <View
      //   key={index}
      //   style={{
      //     flex:1,
      //     flexDirection: "row",
      //     borderWidth: 1,
      //     borderRadius: 10,
      //     padding: 5,
      //     margin: 10,
      //     backgroundColor: '#dcdcdc',
      //   }}>
      //   <View>
      //     <Image style={{height: 100, width: 100}} source={{uri: item.image}} />
      //   </View>
      //   <View style={{flex: 1, justifyContent: "space-between"}}>
      //     <Text> {item.title} </Text>
      //     <Text> $ {item.price}  </Text>
      //     <Button title='Add' />
      //   </View>
      // </View>
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
    console.log(favourite, 'favourite');
  }, [favourite]);

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
