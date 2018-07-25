/**
 * 章节: 11-02
 * 在 React Native JavaScript 代码中调用 iOS 平台的原生代码定义模块
 * FilePath: /11-02/NativeiOSModule/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

// 导入原生代码定义的模块
var MyModule = require('NativeModules').MyModule;

export default class App extends Component < {} > {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {MyModule.hello}
        </Text>
        <TextInput style={styles.input} onChangeText={(text) => this.squareMe(text)}/>
        <Text style={styles.result}>
          {this.state.number}
        </Text>
      </View>
    );
  }

  squareMe(num) {
    if (num == '') {
      return;
    }
    MyModule.squareMe(num, (error, num) => {
      if (error) {
        console.error(error);
      } else {
        this.setState({number: num});
      }
    })
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
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  }
});