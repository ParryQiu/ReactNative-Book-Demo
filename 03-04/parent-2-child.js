/**
* 章节: 03-04
* 父子组件通信，在父组件中调用子组件
* FilePath: /03-04/parent-2-child.js
* @Parry
*/

<ChildComponent name='React'/>

/**
* 章节: 03-04
* 子组件实现，通过 props 获取父页面传递的值
* FilePath: /03-04/parent-2-child.js
* @Parry
*/

class ChildComponent extends Component {
    render() {
        return (
          <Text>Hello {this.props.name}!</Text>
        );
    }
}