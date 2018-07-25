/**
 * 章节: 06-05
 * App.js 定义 演示 Image 组件的基本使用
 * FilePath: /06-05/ImageComponent/App.js
 * @Parry
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
         <Image style={styles.imagern} source={require('./react-native.png')} />
         <Image style={{width: 160, height: 160}} source={{uri: 'https://oindk07nf.qnssl.com/react.png'}} />
         <Image style={{width: 130, height: 130}} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  imagern: {
    width: 190,
    height: 110
  }
});