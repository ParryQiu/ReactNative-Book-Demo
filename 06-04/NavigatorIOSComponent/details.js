/**
 * 章节: 06-04
 * 定义加载的详情页面组件 DetailsComponent
 * FilePath: /06-04/NavigatorIOSComponent/details.js
 * @Parry
 */

import React, {Component} from 'react';
import {StyleSheet, NavigatorIOS, View, Text} from 'react-native';

export default class DetailsComponent extends Component < {} > {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    详情页面 {this.props.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
