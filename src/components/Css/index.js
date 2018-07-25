import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CodeMirror from 'react-codemirror';
import * as sandyboxActions from '../../actions/sandybox'

import './css.css'
import 'codemirror/mode/css/css'

class Css extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show     : true,
			expanded : false
		}
	}
    changeCss = (css) => {
        if(!css)
            css = ' '
        this.props.setCss(css)
	}
	toggleCss = () => {
		if (!this.state.expanded)
			this.setState({ show: !this.state.show })
	}
	toogleExpand = () => {
		if (!this.state.expanded) {
			document.querySelector('.container-preview').style = 'display:none'
			document.querySelector('.html-editor').style = 'display:none'
			document.querySelector('.js-editor').style = 'display:none'
			document.querySelector('.editors').style = 'height:100vh'
			document.querySelector('.css-editor').style.height = 'calc(100vh - 50px)'
			document.querySelector('.css-editor .ReactCodeMirror').style.height = 'calc(100vh - 60px)'
			document.querySelector('.css-editor .tab-expand').innerHTML = 'Close'
			document.querySelector('.css-editor .tab-close').style = 'display:none'
			document.querySelector('.css-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1.5rem'
		}
		else {
			document.querySelector('.container-preview').style = 'display:block'
			document.querySelector('.html-editor').style = 'display:block'
			document.querySelector('.js-editor').style = 'display:block'
			document.querySelector('.editors').style = 'height:50vh'
			document.querySelector('.css-editor').style.height = 'calc(50vh - 50px)'
			document.querySelector('.css-editor .ReactCodeMirror').style.height = 'calc(50vh - 50px)'
			document.querySelector('.css-editor .tab-expand').innerHTML = 'Pin'
			document.querySelector('.css-editor .tab-close').style = 'display:block'
			document.querySelector('.css-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1rem'
		}
		this.setState({ expanded: !this.state.expanded })
	}
    render() {
		if (this.state.show){
			return (
				<div className="container-editor css-editor">
					<div className="tabs">
						<div className="tab-name">CSS</div>
						<div className="tab-expand" onClick={this.toogleExpand}>Pin</div>
						<div className="tab-close" onClick={this.toggleCss}>Close</div>
					</div>
					<Fragment>
						<CodeMirror value={this.props.sandybox.css} onChange={this.changeCss} options={{
							lineNumbers : true,
							mode        : 'css',
							theme       : 'dracula'
						}}/>
					</Fragment>
				</div>
			)
		}
		else{
			return (
				<button onClick={this.toggleCss} className="floatBtn">CSS</button>
			)
		}
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Css)