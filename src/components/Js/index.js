import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import CodeMirror                     from 'react-codemirror';
import * as sandyboxActions           from '../../actions/sandybox'

import './js.css'
import 'codemirror/mode/javascript/javascript'

class Js extends Component {
	constructor(props){
		super(props)
		this.state = {
			show     : true,
			expanded : false,
			js       : ''
		}
	}
	componentDidMount(){
		this.setState({ js : this.props.sandybox.js })
	}
	changeJs = (js) => {
		this.setState({js})
	}
    executeJs = () => {
		let js = this.state.js
		if (!js)
			js = ' '
        this.props.setJs(js)
	}
	toggleJs = () => {
		if (!this.state.expanded)
			this.setState({ show : !this.state.show})
	}
	toogleExpand = () => {
		if (!this.state.expanded) {
			document.querySelector('.container-preview').style = 'display:none'
			if (document.querySelector('.css-editor'))
				document.querySelector('.css-editor').style = 'display:none'
			if (document.querySelector('.html-editor'))
				document.querySelector('.html-editor').style = 'display:none'
			document.querySelector('.editors').style = 'height:100vh'
			document.querySelector('.js-editor').style.height = 'calc(100vh - 50px)'
			document.querySelector('.js-editor .ReactCodeMirror').style.height = 'calc(100vh - 60px)'
			document.querySelector('.js-editor .tab-expand').innerHTML = 'Close'
			document.querySelector('.js-editor .tab-close').style = 'display:none'
			document.querySelector('.js-editor .tab-run').style = 'left:10px'
			document.querySelector('.js-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1.5rem'
		}
		else {
			document.querySelector('.container-preview').style = 'display:block'
			if (document.querySelector('.css-editor'))
				document.querySelector('.css-editor').style = 'display:block'
			if (document.querySelector('.html-editor'))
				document.querySelector('.html-editor').style = 'display:block'
			document.querySelector('.editors').style = 'height:50vh'
			document.querySelector('.js-editor').style.height = 'calc(50vh - 50px)'
			document.querySelector('.js-editor .ReactCodeMirror').style.height = 'calc(50vh - 50px)'
			document.querySelector('.js-editor .tab-expand').innerHTML = 'Pin'
			document.querySelector('.js-editor .tab-close').style = 'display:block'
			document.querySelector('.js-editor .tab-run').style = 'left:15px'
			document.querySelector('.js-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1rem'
		}
		this.setState({ expanded: !this.state.expanded })
	}
    render() {
		if (this.state.show) {
			return (
				this.state.show &&
				<Fragment>
					<div className="container-editor js-editor">
						<div className="tabs">
							<div className="tab-name">JS</div>
							<div className="tab-expand" onClick={this.toogleExpand}>Pin</div>
							<div className="tab-close" onClick={this.toggleJs}>Close</div>
							<div className="tab-run" onClick={this.executeJs}>Run</div>
						</div>
						<CodeMirror value={this.props.sandybox.js} onChange={this.changeJs} options={{
							lineNumbers : true,
							mode        : 'javascript',
							theme       : 'dracula'
						}} />
					</div>
				</Fragment>
			)
		}
		else {
			return (
				<button onClick={this.toggleJs} className="float-btn">JavaScript</button>
			)
		}
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Js)