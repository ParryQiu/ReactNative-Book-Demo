/**
 * 章节: 06-09
 * 演示 WebView 组件的使用
 * FilePath: /06-09/WebViewComponent/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';

export default class App extends Component < {} > {

  state = {
    url: 'https://www.apple.com/',
    scalesPageToFit: true
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{
          uri: this.state.url
        }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}/>
      </View>
    );
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  onShouldStartLoadWithRequest = (event) => {
    console.log("这里添加一些即将开始加载时的自定义逻辑...")
    return true;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45
  },
  webView: {
    height: 350
  }
});
