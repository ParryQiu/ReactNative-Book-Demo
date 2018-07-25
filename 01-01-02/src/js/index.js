/**
 * 章节: 01-01-02
 * index.js 定义了 React 项目的入口
 * FilePath: /01-01-02/index.js
 * @Parry
 */

var React = require('react');
var ReactDOM = require('react-dom');
import BodyIndex from './components/bodyindex';
class Index extends React.Component {

	//生命周期函数 componentWillMount，组件即将加载
	componentWillMount(){
		console.log("Index - componentWillMount");
	}

	//生命周期函数 componentDidMount，组件加载完毕
	componentDidMount(){
		console.log("Index - componentDidMount");
	}

	//页面表现组件渲染
	render() {
		return (
			<div>
				<BodyIndex id={1234567890} name={"IndexPage"}/>
			</div>
		);
	}
}

ReactDOM.render(<Index/>, document.getElementById('example'));