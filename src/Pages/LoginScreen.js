import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert} from 'react-native';
import {Formik} from 'formik';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({navigation}) => {
  const handleLogin = values => {
    if (values.username === '' && values.password === '') {
      Alert.alert('Fill area!');
    }
    else if (values.username === 'a' && values.password === 'a') {
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Wrong username or password');
    }
    // console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Store App</Text>
      </View>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../../login-logo.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter username"
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Enter password"
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
            />
            <Button text="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  header_container: {
    // backgroundColor: "white",
    margin: 10,
    padding: 5,
    alignItems: 'center',
  },
  header: {
    // backgroundColor: "blue",
    fontWeight: 'bold',
    fontSize: 24,
  },
  logo_container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    // backgroundColor: 'green',
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1.5,
    tintColor: 'white',
  },
  body_container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
});
