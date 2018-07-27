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
	}
    componentDidMount(){
        this.previewRender()
    }
    previewRender() {
        const preview = document.getElementById("preview").contentWindow.document
        preview.open()
			preview.writeln(`${this.props.sandybox.html}`)
			preview.writeln(`<style>`)
				preview.writeln(`::-webkit-scrollbar{width:8px;background-color:#33264e}::-webkit-scrollbar-thumb{width:8px;box-shadow:0 0 0 12px #271c3e inset}::-webkit-scrollbar-thumb:focus,::-webkit-scrollbar-thumb:hover{box-shadow:0 0 0 12px #5d42a4 inset}::-webkit-scrollbar-thumb:active{box-shadow:0 0 0 12px #5d42a4 inset}`)
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
					<h1 onClick={this.togglePreview}>{this.props.name}</h1>
                    <iframe id="preview" title="preview"></iframe>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Preview)