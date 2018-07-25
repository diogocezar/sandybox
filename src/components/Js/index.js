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
			show : true
		}
	}
    changeJs = (js) => {
        this.props.setJs(js)
	}
	toggleJs = () => {
		this.setState({ show : !this.state.show})
	}
    render() {
		if (this.state.show) {
			return (
				this.state.show &&
				<Fragment>
					<div className="container-editor js-editor">
						<h1 onClick={this.toggleJs}>JavaScript</h1>
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
				<button onClick={this.toggleJs} className="floatBtn">JavaScript</button>
			)
		}
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Js)