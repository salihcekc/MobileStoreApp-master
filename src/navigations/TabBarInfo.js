import {Image} from 'react-native';
import MainScreen from '../Pages/MainScreen';
import AddCardScreen from '../Pages/AddCardScreen';

export const TabBarInfo = [
  {
    name: 'Main',
    options: {
      headerShown: true,
      tabBarIcon: () => <Image source={require('../assets/main-icon.png')} style={{height: 25, width: 25}} />,
    },
    component: MainScreen,
  },
  {
    options: {
      headerShown: true,
      tabBarIcon: () => <Image source={require('../assets/cart-icon.png')} style={{height: 25, width: 25}} />,
    },
    name: 'Add Card Screen',
    component: AddCardScreen,
  },
];
