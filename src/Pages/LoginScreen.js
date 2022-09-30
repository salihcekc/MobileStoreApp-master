import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Alert, ScrollView, Button} from 'react-native';
import {Formik} from 'formik';
import Input from '../components/Input';
import Buton from '../components/Buton';
const height = Dimensions.get('window').height / 3;
const width = Dimensions.get('window').width / 1.5;

const LoginScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
    });
  }, [navigation]);

  const handleLogin = values => {
    if (values.username === '' && values.password === '') Alert.alert('Fill area!');
    else if (values.username === 'a' && values.password === 'a') navigation.navigate('Tabs');
    else Alert.alert('Wrong username or password');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.header_container}>
          <Text style={styles.headerText}>Store App</Text>
        </View>
        <View style={styles.logo_container}>
          <Image style={styles.logo} source={require('../assets/login-logo.png')} />
        </View>
        <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin}>
          {({handleChange, handleSubmit, values}) => (
            <View style={styles.body_container}>
              <Input placeholder="Enter username" value={values.username} onChangeText={handleChange('username')} iconName="account" />
              <Input placeholder="Enter password" value={values.password} onChangeText={handleChange('password')} iconName="key" />
              <Buton text="Sing In" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06283D',
  },
  scroll_container: {
    flexGrow: 1,
  },
  header_container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    marginTop: height / 8,
    fontWeight: 'bold',
    fontSize: 40,
    color: '#DFF6FF',
  },

  body_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: height / 8,
  },
  logo_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
});
