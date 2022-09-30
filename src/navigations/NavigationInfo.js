import LoginScreen from '../Pages/LoginScreen';
import {BottomTabs} from '../../App';

export const NavigationInfo = [
  {
    name: 'Login',
    options: {headerShown: false},
    component: LoginScreen,
  },
  {
    name: 'Tabs',
    options: {headerShown: false},
    component: BottomTabs,
  },
];
