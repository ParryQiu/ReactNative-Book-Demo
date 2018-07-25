/**
 * 章节: 07-02
 * 演示 Alert 功能的其他使用方法
 * FilePath: /07-02/Alert/other.js
 * @Parry
 */

Alert.alert(
    '提醒的标题',
    '提醒的内容',
    [
      {text: '第一个按钮', onPress: () => console.log('点击后的回调函数')},
      {text: '取消', onPress: () => console.log('点击后的回调函数'), style: 'cancel'},
      {text: '确定', onPress: () => console.log('点击后的回调函数')},
    ],
    { cancelable: false }
  )