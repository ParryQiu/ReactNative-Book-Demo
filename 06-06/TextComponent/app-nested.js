/**
 * 章节: 06-06
 * App.js 定义 演示 Text 组件的嵌套使用
 * FilePath: /06-06/TextComponent/App-nested.js
 * @Parry
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component < {} > {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'left'}}>
                    居左对齐
                    <Text style={styles.textBlue}>
                        自定义文字的样式
                    </Text>
                </Text>

                <View>
                    <Text>嵌套在 View 中的第一行文字</Text>
                    <Text>嵌套在 View 中的第二行文字</Text>
                </View>

                <Text>
                    <Text>嵌套在 View 中的第一行文字</Text>
                    <Text>嵌套在 View 中的第二行文字</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150
    },
    textBlue: {
        backgroundColor: 'white',
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 20,
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 1,
        textShadowColor: '#00cccc'
    }
});