/**
 * 章节: 06-02
 * App.js 样式定义重构
 * FilePath: /06-02/ViewComponent/app-2.js
 * @Parry
 */

//引入 React 相关模块
import React, {Component} from 'react'; 
//引入 react-native 相关模块
import {Platform, StyleSheet, Text, View} from 'react-native';

//定义类名称为 App 并进行导出操作，供其他外部组件调用或复用
export default class App extends Component < {} > {
    //render 函数定义，用于返回当前组件的页面渲染定义
    render() {
        return (
            <View style={styles.rootView}>
                <View style={styles.viewOne}/>
                <View style={styles.viewTwo}/>
            </View>
        );
    }
}

//使用统一定义样式的形式进行元素样式的定义，让代码变得简洁、易维护
const styles = StyleSheet.create({
    rootView: {
        flexDirection: 'row', // 横向排列
        height: 100,
        marginTop: 40
    },
    viewOne: {
        backgroundColor: 'blue',
        flex: 0.4 //view 1 的伸缩因子，占用总长度的 40%
    },
    viewTwo: {
        backgroundColor: 'red',
        flex: 0.6 //view 2 的伸缩因子，占用总长度的 60%
    }
});