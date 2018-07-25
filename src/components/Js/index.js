import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import './js.css'

const CodeMirror = require('react-codemirror')
require('codemirror/mode/javascript/javascript');

class Js extends Component {
    changeJs = (js) => {
        this.props.setJs(js)
    }
    render() {
        var options = {
            lineNumbers : true,
            mode        : 'javascript'
        };
        return (
            <Fragment>
                <CodeMirror value={this.props.sandybox.js} onChange={this.changeJs} options={options} />
            </Fragment>
        )
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Js)