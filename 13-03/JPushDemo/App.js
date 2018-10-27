/**
 * 章节: 13-03
 * 在 React Native JavaScript 代码中调用极光推送组件的方法
 * FilePath: /13-03/JPushDemo/App.js
 * @Parry
 */

import React, { Component } from 'react'
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

// 导入 jpush-react-native 组件中的 JPushModule
import JPushModule from 'jpush-react-native'

const receiveNotificationEvent = 'receiveNotification'
const openNotificationEvent = 'openNotification'
const getRegistrationIdEvent = 'getRegistrationId'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      appkey: 'AppKey', // app 的 key，可以通知极光推送的后台获取到
      imei: 'IMEI', // 设备 IMEI 号
      package: 'PackageName', // Android 项目包名
      deviceId: 'DeviceId', // 设备 ID
      version: 'Version', // 极光推送版本信息
      registrationId: 'registrationId', // 设备注册到的唯一 ID
      tag: '', // 标签
      alias: '' // 别名
    }

    this.onInitPress = this.onInitPress.bind(this)
    this.onGetRegistrationIdPress = this.onGetRegistrationIdPress.bind(this)
    this.setTag = this.setTag.bind(this)
    this.setAlias = this.setAlias.bind(this)
  }

  onInitPress () {
    JPushModule.initPush()
  }


  onGetRegistrationIdPress () {
    //获取设备唯一ID
    JPushModule.getRegistrationID(registrationId => {
      this.setState({
        registrationId: registrationId
      })
    })
  }

  setTag () {
    if (this.state.tag) {
      //参数为一个标签数组字符串
      JPushModule.setTags(this.state.tag.split(','), map => {
        if (map.errorCode === 0) {
          console.log('Tag operate succeed, tags: ' + map.tags)
        } else {
          console.log('error code: ' + map.errorCode)
        }
      })
    }
  }

  setAlias () {
    if (this.state.alias !== undefined) {
      JPushModule.setAlias(this.state.alias, map => {
        if (map.errorCode === 0) {
          console.log('set alias succeed')
        } else {
          console.log('set alias failed, errorCode: ' + map.errorCode)
        }
      })
    }
  }

  componentDidMount () {
    // Android 平台的特别处理
    if (Platform.OS === 'android') {
      JPushModule.initPush() // 初始化极光推送组件
      JPushModule.getInfo(map => { // 初始化成功后获取极光推送的相关属性
        this.setState({
          appkey: map.myAppKey,
          imei: map.myImei,
          package: map.myPackageName,
          deviceId: map.myDeviceId,
          version: map.myVersion
        })
      })
      JPushModule.notifyJSDidLoad(resultCode => {
        if (resultCode === 0) {
        }
      })
    }

    // App 接收到消息推送时，可以通过此函数获取相关通知参数
    JPushModule.addReceiveNotificationListener(map => {
      console.log('alertContent: ' + map.alertContent)
      console.log('extras: ' + map.extras)
    })

    JPushModule.addGetRegistrationIdListener(registrationId => {
      console.log('从平台注册到的设备唯一ID：' + registrationId)
    })
  }

  componentWillUnmount () {
    // App 退出时取消事件的订阅
    JPushModule.removeReceiveNotificationListener(receiveNotificationEvent)
    JPushModule.removeReceiveOpenNotificationListener(openNotificationEvent)
    JPushModule.removeGetRegistrationIdListener(getRegistrationIdEvent)
  }

  render () {
    return (
      <View>
        <Text style={styles.textStyle}>{this.state.appkey}</Text>
        <Text style={styles.textStyle}>{this.state.imei}</Text>
        <Text style={styles.textStyle}>{this.state.package}</Text>
        <Text style={styles.textStyle}>{this.state.deviceId}</Text>
        <Text style={styles.textStyle}>{this.state.version}</Text>
        <TouchableHighlight
          underlayColor='#0866d9'
          activeOpacity={0.5}
          style={styles.btnStyle}
          onPress={this.onInitPress}
        >
          <Text style={styles.btnTextStyle}>INITPUSH</Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          underlayColor='#f5a402'
          activeOpacity={0.5}
          style={styles.btnStyle}
          onPress={this.onGetRegistrationIdPress}
        >
          <Text style={styles.btnTextStyle}>获取设备注册到的唯一 ID</Text>
        </TouchableHighlight>
       
        <Text style={styles.textStyle}>{this.state.registrationId}</Text>

        <View style={styles.cornorBg}>
          <View style={styles.setterContainer}>
            <Text style={styles.label}>Tag:</Text>
            <TextInput
              style={styles.tagInput}
              placeholder={
                'Tag为大小写字母，数字，下划线，中文，多个 tag 以 , 分割'
              }
              multiline
              onChangeText={e => {
                this.setState({ tag: e })
              }}
            />
            <TouchableHighlight
              style={styles.setBtnStyle}
              onPress={this.setTag}
              underlayColor='#e4083f'
              activeOpacity={0.5}
            >
              <Text style={styles.btnText}>设置 Tags</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.setterContainer}>
            <Text style={styles.label}>Alias:</Text>
            <TextInput
              style={styles.aliasInput}
              placeholder={'Alias为大小写字母，数字，下划线'}
              multiline
              onChangeText={e => {
                this.setState({ alias: e })
              }}
            />
            <TouchableHighlight
              style={styles.setBtnStyle}
              onPress={this.setAlias}
              underlayColor='#e4083f'
              activeOpacity={0.5}
            >
              <Text style={styles.btnText}>设置 Alias</Text>
            </TouchableHighlight>
          </View>        
      </View>
    )
  }
}

var styles = StyleSheet.create({
  ......
})
