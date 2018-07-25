/**
 * 章节: 06-02
 * App.js 定义演示 View 的事件使用
 * FilePath: /06-02/ViewComponent/app-3.js
 * @Parry
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          marginTop: 40,
        }} 
        onLayout={this.onLayout}>
        <View style={{backgroundColor: 'blue', flex: 0.4}} />
        <View style={{backgroundColor: 'red', flex: 0.6}} />
      </View>
    );
  }

  onLayout = event => {
    let {width, height} = event.nativeEvent.layout
    console.log("view width: "+ width);
    console.log("view height: "+ height);
  }
}