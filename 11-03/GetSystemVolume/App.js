/**
 * 章节: 11-03
 * 在 React Native JavaScript 代码中调用 iOS 平台的原生代码定义模块
 * 获取系统音量
 * FilePath: /11-03/GetSystemVolume/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';

import {NativeModules} from 'react-native';

export default class App extends Component < {} > {
  constructor(props) {
    super(props);
  }

  getVolume() {
    const OutputVolume = NativeModules.OutputVolume;
    OutputVolume
      .get()
      .then(volume => {
        Alert.alert('系统当前音量', volume * 100 + "%")
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={this
          .getVolume
          .bind(this)}>
          获取系统设备的音量
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
