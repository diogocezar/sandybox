import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import CodeMirror                     from 'react-codemirror';
import * as sandyboxActions           from '../../actions/sandybox'

import './html.css'
import 'codemirror/mode/htmlembedded/htmlembedded'

class Html extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: true
		}
	}
    changeHtml = (html) => {
        if (!html)
            html = ' '
        this.props.setHtml(html)
	}
	toggleHtml = () => {
		this.setState({ show: !this.state.show })
	}
    render() {
		if(this.state.show){
			return(
				<Fragment>
					<div className="container-editor html-editor">
						<h1 onClick={this.toggleHtml}>HTML</h1>
						<CodeMirror value={this.props.sandybox.html} onChange={this.changeHtml} options={{
							lineNumbers: true,
							mode: 'htmlembedded',
							theme: 'dracula'
						}} />
					</div>
				</Fragment>
			)
		}
		else{
			return(
				<button onClick={this.toggleHtml} className="floatBtn">HTML</button>
			)
		}
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Html)