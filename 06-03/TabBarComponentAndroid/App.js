/**
 * 章节: 06-03
 * App.js 定义 演示 react-native-tab-navigator 的基本使用
 * FilePath: /06-03/TabBarComponentAndroid/App.js
 * @Parry
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component<{}> {

  state = {
    selectedTab: 'home',
  };

  _renderContent = (color: string, pageText: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  };
  
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('./flux.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('./relay.png')} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {this._renderContent('#414A8C', '首页 Tab - 1')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="个人中心"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('./flux.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('./relay.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
           {this._renderContent('#783E33', '个人中心 Tab - 2')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});
