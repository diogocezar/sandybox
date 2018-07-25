import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import CodeMirror                     from 'react-codemirror';
import * as sandyboxActions           from '../../actions/sandybox'

import './html.css'
import 'codemirror/mode/htmlembedded/htmlembedded'

class Html extends Component {
    changeHtml = (html) => {
        if (!html)
            html = ' '
        this.props.setHtml(html)
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>HTML</h1>
                    <CodeMirror value={this.props.sandybox.html} onChange={this.changeHtml} options={{
                        lineNumbers: true,
                        mode: 'htmlembedded',
                        theme: 'dracula'
                    }} />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Html)