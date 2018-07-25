/**
 * 章节: 08-03
 * App.js 定义了项目的大结构，使用 4 个 Tab 进行布局。
 * FilePath: /08-03/ListDemo/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './home';

export default class App extends Component < {} > {

  state = {
    selectedTab: 'home'
  };

  _renderContent = (color : string, index : string) => {
    switch (index) {
      case "home":
        return (<HomePage/>);
    }
  };

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./flux.png')}/>}
          renderSelectedIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./relay.png')}/>}
          onPress={() => this.setState({selectedTab: 'home'})}>
          {this._renderContent('#FFFFFF', 'home')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="发现"
          renderIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./flux.png')}/>}
          renderSelectedIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./relay.png')}/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          {this._renderContent('#FFFFFF', '个人中心 Tab - 2')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile2'}
          title="通知"
          renderIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./flux.png')}/>}
          renderSelectedIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./relay.png')}/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          {this._renderContent('#FFFFFF', '个人中心 Tab - 2')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile3'}
          title="个人中心"
          renderIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./flux.png')}/>}
          renderSelectedIcon={() => <Image
          style={{
          width: 25,
          height: 25
        }}
          source={require('./relay.png')}/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          {this._renderContent('#FFFFFF', '个人中心 Tab - 2')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: 'white',
    margin: 50
  }
});
