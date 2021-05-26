import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ItemRow from '../components/ItemRow';

import {items} from '../Data';
import styles from '../styles/components/itemsStyles';
import itemStyles from '../styles/components/itemsStyles';
export default class ItemsScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FAFAFA',
        }}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          Produtos em Oferta
        </Text>
        <SafeAreaView>
          <FlatList
            style={itemStyles.container}
            data={items}
            renderItem={({item}) => <ItemRow item={item}></ItemRow>}
            keyExtractor={item => item.id}></FlatList>
        </SafeAreaView>
      </View>
    );
  }
}
