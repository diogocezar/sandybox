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
			show     : true,
			expanded : false
		}
	}
    changeHtml = (html) => {
        if (!html)
            html = ' '
        this.props.setHtml(html)
	}
	toggleHtml = () => {
		if(!this.state.expanded)
			this.setState({ show: !this.state.show })
	}
	toogleExpand = () => {
		if (!this.state.expanded) {
			document.querySelector('.container-preview').style = 'display:none'
			if (document.querySelector('.css-editor'))
				document.querySelector('.css-editor').style = 'display:none'
			if (document.querySelector('.js-editor'))
				document.querySelector('.js-editor').style = 'display:none'
			document.querySelector('.editors').style = 'height:100vh'
			document.querySelector('.html-editor').style.height = 'calc(100vh - 50px)'
			document.querySelector('.html-editor .ReactCodeMirror').style.height = 'calc(100vh - 60px)'
			document.querySelector('.html-editor .tab-expand').innerHTML = 'Close'
			document.querySelector('.html-editor .tab-close').style = 'display:none'
			document.querySelector('.html-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1.5rem'
		}
		else {
			document.querySelector('.container-preview').style = 'display:block'
			if (document.querySelector('.css-editor'))
				document.querySelector('.css-editor').style = 'display:block'
			if (document.querySelector('.js-editor'))
				document.querySelector('.js-editor').style = 'display:block'
			document.querySelector('.editors').style = 'height:50vh'
			document.querySelector('.html-editor').style.height = 'calc(50vh - 50px)'
			document.querySelector('.html-editor .ReactCodeMirror').style.height = 'calc(50vh - 50px)'
			document.querySelector('.html-editor .tab-expand').innerHTML = 'Up'
			document.querySelector('.html-editor .tab-expand').innerHTML = 'Pin'
			document.querySelector('.html-editor .tab-close').style = 'display:block'
			document.querySelector('.html-editor .ReactCodeMirror .CodeMirror').style = 'font-size: 1rem'
		}
		this.setState({ expanded: !this.state.expanded })
	}
    render() {
		if(this.state.show){
			return(
				<Fragment>
					<div className="container-editor html-editor">
						<div className="tabs">
							<div className="tab-name">HTML</div>
							<div className="tab-expand" onClick={this.toogleExpand}>Pin</div>
							<div className="tab-close" onClick={this.toggleHtml}>Close</div>
						</div>
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
				<button onClick={this.toggleHtml} className="float-btn">HTML</button>
			)
		}
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Html)