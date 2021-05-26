import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import styles from '../styles/components/itemsStyles';

export default class ItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View style={styles.card}>
        <Text> Nome do Item: {this.props.item.name} </Text>
        <Text> Preço: {this.props.item.price} </Text>
      </View>
    );
  }
}
