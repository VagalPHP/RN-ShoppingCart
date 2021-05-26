import React, {Component} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
const navigatorStyles = {
  header: header,
  tab: {
    tabBarIconOptions,
    cartTabStyle,
  },
};

/** CONSTANTES DE PROPRIEDADES */
const header = {
  headerStyle: {
    backgroundColor: '#32DB72',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

function cartTabStyle() {
  return {
    title: 'Meu Carrinho',
    tabBarBadge: 3,
    tabBarBadgeStyle: {
      backgroundColor: '#89FB97',
      marginLeft: 3,
    },
  };
}

/** FUNÇÕES */
function tabBarIconOptions({route, focused, color, size}) {
  color = focused ? '#FC741C' : '#617896';
  size = focused ? 24 : 18;

  let iconName;
  if (route.name === 'Home')
    focused ? (iconName = 'home') : (iconName = 'home-outline');

  if (route.name === 'Items')
    focused ? (iconName = 'cube') : (iconName = 'cube-outline');

  if (route.name === 'Cart')
    focused ? (iconName = 'cart') : (iconName = 'cart-outline');
  return <Icons name={iconName} size={size} color={color}></Icons>;
}

export default navigatorStyles;
