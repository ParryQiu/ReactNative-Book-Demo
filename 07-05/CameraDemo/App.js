/**
 * 章节: 07-05
 * 演示 react-native-image-picker 组件的使用
 * FilePath: /07-05/CameraDemo/App.js
 * @Parry
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {

  state = {
    avatarSource: null,
    videoSource: null
  };

  selectPhotoTapped() {
    //设置图片选择的属性
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      takePhotoButtonTitle: '使用摄像头拍摄',
      chooseFromLibraryButtonTitle: '从相册中选择',
      cancelButtonTitle: '取消',
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('回调响应 = ', response);

      if (response.didCancel) {
        console.log('用户取消了选择图片');
      } else if (response.error) {
        console.log('ImagePicker 错误: ', response.error);
      } else if (response.customButton) {
        console.log('用户点击了自定义按钮: ', response.customButton);
      } else {
        let source = {
          uri: response.uri
        };

        //获取用户选择的图片，可以用于前端显示使用，base64 形式。
        let sourceImage = {
          uri: 'data:image/jpeg;base64,' + response.data
        };

        this.setState({avatarSource: source});
      }
    });
  }

  selectVideoTapped() {
    //设置视频选择的属性
    const options = {
      title: '选择视频',
      takePhotoButtonTitle: '使用摄像头拍摄',
      chooseFromLibraryButtonTitle: '从相册中选择',
      cancelButtonTitle: '取消',
      mediaType: 'video',
      videoQuality: 'medium'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('回调响应 = ', response);

      if (response.didCancel) {
        console.log('用户取消了选择视频');
      } else if (response.error) {
        console.log('ImagePicker 错误: ', response.error);
      } else if (response.customButton) {
        console.log('用户点击了自定义按钮: ', response.customButton);
      } else {
        this.setState({videoSource: response.uri});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this
          .selectPhotoTapped
          .bind(this)}>
          <View
            style={[
            styles.avatar,
            styles.avatarContainer, {
              marginBottom: 20
            }
          ]}>
            {this.state.avatarSource === null
              ? <Text>选择一个图片</Text>
              : <Image style={styles.avatar} source={this.state.avatarSource}/>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this
          .selectVideoTapped
          .bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>选择一个视频</Text>
          </View>
        </TouchableOpacity>

        {this.state.videoSource && <Text style={{
          margin: 8,
          textAlign: 'center'
        }}>{this.state.videoSource}</Text>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
