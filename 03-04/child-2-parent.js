/**
* 章节: 03-04
* 子父组件通信，子组件的实现
* FilePath: /03-04/child-2-parent.js
* @Parry
*/

import React, {Component} from 'react'

export default class ChildComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'React'
    }
  }

  handleChange() {
    const nickName = 'Parry';
    this.setState({name: nickName})
    //调用父组件传递过来的函数参数，传递值到父组件去。
    this
      .props
      .changeName(nickName)
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <p>Hello {name}!</p>
        <Button
          onPress={this
          .handleChange
          .bind(this)}
          title="修改一下 name 为 Parry"/>
      </div>
    )
  }
}

/**
* 章节: 03-04
* 子父组件通信，父组件的实现
* FilePath: /03-04/child-2-parent.js
* @Parry
*/
import React, {Component} from 'react';
import ChildComponent from './ChildComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React'
    }
  }

  //传递到子组件的参数，不过参数是一个函数。
  handleChangeName(nickName) {
    this.setState({name: nickName})
  }

  render() {
    return (
      <div>
        <p>父组件的 name：{this.state.name}</p>
        <ChildComponent
          changeName={(val) => {
          this.handleChangeName(val)
        }}/>
      </div>
    );
  }
}

export default App;
