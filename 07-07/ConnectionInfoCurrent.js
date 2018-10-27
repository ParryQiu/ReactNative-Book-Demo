/**
 * 章节: 07-07
 * 演示 NetInfo 功能的使用
 * FilePath: /07-07/ConnectionInfoCurrent.js
 * @Parry
 */

const React = require('react');
const ReactNative = require('react-native');
const {
  NetInfo,
  Text,
  View,
  TouchableWithoutFeedback,
} = ReactNative;

class ConnectionInfoCurrent extends React.Component {
    state = {
      connectionInfo: null,
    };
  
    componentDidMount() {
      NetInfo.addEventListener( //添加用户网络状态变更的事件监听函数
          'change',
          this._handleConnectionInfoChange
      );
      NetInfo.fetch().done(
          (connectionInfo) => { this.setState({connectionInfo}); }
      );
    }
  
    componentWillUnmount() {
      NetInfo.removeEventListener(
          'change',
          this._handleConnectionInfoChange
      );
    }
  
    //处理在用户的网络情况变更时的处理函数
    _handleConnectionInfoChange = (connectionInfo) => {
      this.setState({
        connectionInfo,
      });
    };
  
    render() {
      return (
          <View>
            <Text>{this.state.connectionInfo}</Text>
          </View>
      );
    }
  }