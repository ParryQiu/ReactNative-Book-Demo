/**
 * 章节: 07-06
 * 演示 Geolocation 位置变更回调的使用
 * FilePath: /07-06/GeolocationDemo/watchPosition.js
 * @Parry
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition( //在用户的定位信息发生变更的时候进行事件的回调
      (position) => {
        this.setState({
          latitude: position.coords.latitude, //获取纬度
          longitude: position.coords.longitude, //获取经度
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>当前纬度: {this.state.latitude}</Text>
        <Text>当前经度: {this.state.longitude}</Text>
        {this.state.error ? <Text>错误信息: {this.state.error}</Text> : null}
      </View>
    );
  }
}