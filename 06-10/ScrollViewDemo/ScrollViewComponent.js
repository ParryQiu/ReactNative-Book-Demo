/**
* 章节: 06-10
* 定义了 ScrollViewComponent 组件
* FilePath: /06-10/ScrollViewDemo/ScrollViewComponent.js
* @Parry
*/

import React, { Component } from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';

export default class ScrollViewComponent extends Component {
   state = {
      names: [
         {'name': 'React', 'id': 1},
         {'name': 'React Native', 'id': 2},
         {'name': 'PHP', 'id': 3},
         {'name': 'Java', 'id': 4},
         {'name': 'C#', 'id': 5},
         {'name': 'C', 'id': 6},
         {'name': 'C++', 'id': 7},
         {'name': 'Python', 'id': 8},
         {'name': 'Ruby', 'id': 9},
         {'name': 'JavaScript', 'id': 10},
         {'name': 'Perl', 'id': 11},
         {'name': 'JSP', 'id': 12}
      ]
   }
   render() {
      return (
         <SafeAreaView>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})