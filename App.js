import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ItemsScreen from './src/screens/ItemsScreen';

/** PACKAGES */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

/** STYLES */
import navigatorStyles from './src/styles/nav/navigatorStyles';
import CartScreen from './src/screens/CartScreen';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#FC741C',
            inactiveTintColor: '#617896',
          }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>
              navigatorStyles.tab.tabBarIconOptions({
                route,
                focused,
                color,
                size,
              }),
          })}>
          <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
          <Tab.Screen
            name="Items"
            component={ItemsScreen}
            options={{title: 'Produtos'}}></Tab.Screen>
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={navigatorStyles.tab.cartTabStyle()}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
