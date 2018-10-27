/**
 * 章节: 06-06
 * App.js 定义 演示 Text 自定义组件的使用
 * FilePath: /06-06/TextComponent/App.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component < {} > {
    render() {
        return (
            <View style={styles.container}>
                <TopLevelText>顶层元素文字</TopLevelText>
                <SecondLevelText>第二层元素文字</SecondLevelText>
                <ThirdLevelText>第三层元素文字</ThirdLevelText>
            </View>
        );
    }
}

class TopLevelText extends Component {
    render() {
        return (
            <Text
                style={{
                fontSize: 20,
                color: '#FF0000'
            }}>{this.props.children}</Text>
        )
    }
}

class SecondLevelText extends Component {
    render() {
        return (
            <TopLevelText>
                <Text style={{
                    fontSize: 40
                }}>{this.props.children}</Text>
            </TopLevelText>
        )
    }
}

class ThirdLevelText extends Component {
    render() {
        return (
            <SecondLevelText>
                <Text
                    style={{
                    backgroundColor: '#333333'
                }}>{this.props.children}</Text>
            </SecondLevelText>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150
    }
});