/**
 * 章节: 06-06
 * App.js 定义 演示 Text 组件的基本使用
 * FilePath: /06-06/TextComponent/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component < {} > {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'left'}}>
          居左对齐
        </Text>
        <Text style={{textAlign: 'center'}}>
          居中对齐
        </Text>
        <Text style={{textAlign: 'right'}}>
          居右对齐
        </Text>
        <Text style={styles.textBlue}>
          自定义文字的样式
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 150,
  },
  textBlue: {
    backgroundColor: 'white',
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 20,
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    textShadowColor: '#00cccc'
  }
});