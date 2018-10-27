/**
 * 章节: 12-02
 * 演示使用 Android 中的混合开发模块的调用
 * FilePath: /12-02/NativeAndroidModule/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import MyModule from "./MyAndroidModule";

export default class App extends Component < {} > {
  componentDidMount() {
    if (Platform.OS != "ios") {
      MyModule.keepScreenAwake();
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Android 混合开发
        </Text>
        <Text style={styles.instructions}>
          演示调用 Android 的原生组件方法
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
