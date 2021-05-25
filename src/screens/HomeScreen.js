import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import HomeStyles from '../styles/components/homeStyles';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={HomeStyles.general}>
        <Text> I'm acctually in HomeScren </Text>
        <Button
          title="Ver Items"
          onPress={() => this.props.navigation.navigate('Items')}></Button>
      </View>
    );
  }
}
