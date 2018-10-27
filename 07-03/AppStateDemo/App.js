/**
 * 章节: 07-03
 * 演示 AppState 功能的使用
 * FilePath: /07-03/AppStateDemo/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Text, View, AppState} from 'react-native';

export default class App extends Component < {} > {
  state = {
    appState: AppState.currentState,
    previousAppStates: []
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (appState) => {
    var previousAppStates = this
      .state
      .previousAppStates
      .slice();
    previousAppStates.push(this.state.appState);
    this.setState({appState, previousAppStates});
  };

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    );
  }
}