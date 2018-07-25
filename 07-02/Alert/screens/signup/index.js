/**
 * 章节: 07-02
 * 演示 Alert 功能的使用
 * FilePath: /07-02/Alert/signup/index.js
 * @Parry
 */

import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from 'react-native'

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class SignupVriew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode="cover">
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity style={styles.headerBackButtonView}>
                <Image source={backIcon} style={styles.backButtonIcon} resizeMode="contain"/>
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>注册</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image source={personIcon} style={styles.inputIcon} resizeMode="contain"/>
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="用户名"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent'
                value={this.state.userName}
                onChangeText=
                {(userName)=>this.setState({userName})}/>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image source={emailIcon} style={styles.inputIcon} resizeMode="contain"/>
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="邮箱"
                placeholderTextColor="#FFF"
                value={this.state.email}
                onChangeText=
                {(email)=>this.setState({email})}/>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image source={lockIcon} style={styles.inputIcon} resizeMode="contain"/>
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="密码"
                placeholderTextColor="#FFF"
                value={this.state.password}
                onChangeText=
                {(password)=>this.setState({password})}/>
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableHighlight
              onPress={this
              .register
              .bind(this)}>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>注 册</Text>
              </View>
            </TouchableHighlight>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>已有账号？<Text style={styles.whiteFont}>
                    登录</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }

  register() {
    if (this.state.userName == '' || this.state.email == '' || this.state.password == '') {
      Alert.alert('提醒', '请检查您填写的信息完整性', [
        {
          text: '确定',
          onPress: () => console.log('用户点击确定按钮之后的回调函数。')
        }
      ])
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff'
  },
  inputs: {
    paddingVertical: 20
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    width: 30,
    height: 30
  },
  input: {
    flex: 1,
    fontSize: 20
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
