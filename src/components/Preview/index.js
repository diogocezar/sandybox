import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import * as sandyboxActions           from '../../actions/sandybox'

import './preview.css'

class Preview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fullScreen: false
		}
		console.log(this.state)
	}
    componentDidMount(){
        this.previewRender()
    }
    previewRender() {
        const preview = document.getElementById("preview").contentWindow.document
        preview.open()
			preview.writeln(`${this.props.sandybox.html}`)
			preview.writeln(`<style>`)
				preview.writeln(`@import url('https://fonts.googleapis.com/css?family=Montserrat');`)
				preview.writeln(`${this.props.sandybox.css}`)
			preview.writeln(`</style>`)
            preview.writeln(`<script>${this.props.sandybox.js}</script>`)
        preview.close()
	}
	togglePreview = () => {
		if(!this.state.fullScreen){
			document.querySelector('.editors').style           = 'display:none'
			document.querySelector('.container-preview').style = 'height:100vh'
			document.querySelector('#preview').style.height    = 'calc(100vh - 50px)'
		}
		else{
			document.querySelector('.editors').style           = 'display:flex'
			document.querySelector('.container-preview').style = 'height:50vh'
			document.querySelector('#preview').style.height    = 'calc(50vh - 50px)'
		}
		this.setState({ fullScreen: !this.state.fullScreen })
	}
    render() {
        if(document.getElementById("preview")){
            this.previewRender()
        }
        return (
            <Fragment>
                <div className="container-preview">
					<h1 onClick={this.togglePreview}>Page Rendered</h1>
                    <iframe id="preview" title="preview"></iframe>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Preview)