/**
* 章节: 06-10
* App.js 定义，演示 ScrollView 组件的使用
* FilePath: /06-10/ScrollViewDemo/App.js
* @Parry
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollViewComponent from './ScrollViewComponent.js'

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollViewComponent />
    );
  }
}