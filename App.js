import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import {TabBarInfo} from './src/navigations/TabBarInfo';
import {NavigationInfo} from './src/navigations/NavigationInfo';

export const BottomTabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      {TabBarInfo.map((item, index) => {
        return <Tab.Screen key={index} name={item.name} options={item.options} component={item.component} />;
      })}
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {NavigationInfo.map((item, index) => {
            return <Stack.Screen key={index} name={item.name} options={item.options} component={item.component} />;
          })}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
