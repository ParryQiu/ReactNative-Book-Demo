/**
 * 章节: 08-03
 * home.js 定义了第一个 Tab 加载的页面组件，用于加载豆瓣电影列表
 *         同时演示了 ListView 绑定方法
 * FilePath: /08-03/ListDemo/home.js
 * @Parry
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    SafeAreaView
} from 'react-native';

export default class HomePage extends Component < {} > {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ //定义数据源
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
    }

    componentDidMount() {
        this.fetchData(); //开始请求数据
    };

    fetchData() {
        fetch("https://api.douban.com/v2/movie/in_theaters").then((response) => response.json()).then((responseData) => {
            this.setState({
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(responseData.subjects), //读取返回的所有电影数据
                loaded: true
            });
        }).done();
    };

    render() {
        return (
            <View style={styles.container}>
                <ListView automaticallyAdjustContentInsets={false} //此选项可以修复掉会自动多出来的大约 10px 的空行
                    dataSource={this.state.dataSource} renderRow={this._renderRow}/>
            </View>
        );
    };

    _renderRow(rowData, sectionID, rowID) {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <Image
                        style={styles.thumb}
                        source={{
                        uri: rowData.images.large
                    }}/>
                    <View style={styles.texts}>
                        <Text style={styles.textTitle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.textTitle}>
                            年份: {rowData.year}
                        </Text>
                        <Text style={styles.textTitle}>
                            豆瓣评分: {rowData.rating.average}
                        </Text>
                    </View>
                </View>
                <View style={styles.separator}/>
            </SafeAreaView>
        );
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        padding: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#EEEEEE'
    },
    thumb: {
        width: 60,
        height: 80,
        borderRadius: 2
    },
    textTitle: {
        flex: 1,
        textAlign: "left",
        paddingLeft: 10,
        fontWeight: "bold",
        flexDirection: 'row',
        color: "#666666"
    },
    texts:{
        flexDirection: 'column',
        paddingTop: 5
    }
});