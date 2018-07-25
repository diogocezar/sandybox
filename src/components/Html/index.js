import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import './html.css'

const CodeMirror = require('react-codemirror')
require('codemirror/mode/htmlembedded/htmlembedded');

class Html extends Component {
    changeHtml = (html) => {
        this.props.setHtml(html)
    }
    render() {
        var options = {
            lineNumbers : true,
            mode        : 'htmlembedded'
        };
        return (
            <Fragment>
                <CodeMirror value={this.props.sandybox.html} onChange={this.changeHtml} options={options}/>
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Html)