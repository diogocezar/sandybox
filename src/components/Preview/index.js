import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import * as sandyboxActions           from '../../actions/sandybox'

import './preview.css'

class Preview extends Component {
    componentDidMount(){
        this.previewRender()
    }
    previewRender() {
        const preview = document.getElementById("preview").contentWindow.document
        preview.open()
            preview.writeln(`${this.props.sandybox.html}`)
            preview.writeln(`<style>${this.props.sandybox.css}</style>`)
            preview.writeln(`<script>${this.props.sandybox.js}</script>`)
        preview.close()
    }
    render() {
        if(document.getElementById("preview")){
            this.previewRender()
        }
        return (
            <Fragment>
                <div className="container-preview">
                    <iframe id="preview" title="preview"></iframe>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Preview)