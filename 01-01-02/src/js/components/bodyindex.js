/**
 * 章节: 01-01-02
 * bodyindex.js 定义了一个名为 BodyIndex 的子组件
 * FilePath: /01-01-02/bodyindex.js
 * @Parry
 */

import React from 'react';
export default class BodyIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "Parry"
    };
  }

  render() {
    setTimeout(() => {
      //5秒后更改一下 state
      this.setState({username: "React"});
    }, 5000);

    return (
      <div>
      
        <h1>子组件页面</h1>

        <h2>当前组件自身的 state</h2>
        <p>username: {this.state.username}</p>

        <h2>父组件传递过来的参数</h2>
        <p>id: {this.props.id}</p>
        <p>name: {this.props.name}</p>

      </div>
    )
  }
}