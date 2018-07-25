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
			show: true
		}
	}
    changeCss = (css) => {
        if(!css)
            css = ' '
        this.props.setCss(css)
	}
	toggleCss = () => {
		this.setState({ show: !this.state.show })
	}
    render() {
		if (this.state.show){
			return (
				<div className="container-editor css-editor">
					<h1 onClick={this.toggleCss}>CSS</h1>
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