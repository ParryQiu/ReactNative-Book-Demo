/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker} from 'react-native';

type Props = {};
export default class App extends Component < Props > {

  constructor(props)
  {
    super(props);
    this.state = {
      pickedValue: "reactjs"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Picker
            style={{
            width: 100
          }}
            selectedValue={this.state.pickedValue}
            onValueChange=
            {(val)=> this.setState({pickedValue: val})}>

            <Picker.Item label="Java" value='java'/>
            <Picker.Item label="JavaScript" value='js'/>
            <Picker.Item label="Swift" value='swift'/>
            <Picker.Item label="React.js" value='reactjs'/>
            <Picker.Item label="Vue.js" value='vuejs'/>

          </Picker>
        </View>
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
  }
});
