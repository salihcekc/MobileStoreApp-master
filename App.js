import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import LoginScreen from './src/Pages/LoginScreen';
import MainScreen from './src/Pages/MainScreen';
import AddCardScreen from './src/Pages/AddCardScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Main" component={MainScreen} />
      <Tab.Screen name="Add Card Screen" component={AddCardScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="Tabs"
            component={BottomTabs}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
