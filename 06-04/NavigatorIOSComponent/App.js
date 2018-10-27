/**
 * 章节: 06-04
 * App.js 定义 演示 NavigatorIOS 的基本使用
 * FilePath: /06-04/NavigatorIOSComponent/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {StyleSheet, NavigatorIOS} from 'react-native';
import MainComponent from './main';
import DetailsComponent from "./details";

export default class App extends Component < {} > {
  render() {
    return (<NavigatorIOS
      style={styles.container}
      initialRoute={{
      title: '主页面',
      component: MainComponent,
      passProps: {
        id: 123456
      }
    }}
      tintColor="#008888"/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
