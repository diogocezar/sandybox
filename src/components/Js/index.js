import React, { Component, Fragment } from 'react';
import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'
import CodeMirror                     from 'react-codemirror';
import * as sandyboxActions           from '../../actions/sandybox'

import './js.css'
import 'codemirror/mode/javascript/javascript'

class Js extends Component {
    changeJs = (js) => {
        this.props.setJs(js)
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>JavaScript</h1>
                    <CodeMirror value={this.props.sandybox.js} onChange={this.changeJs} options={{
                        lineNumbers : true,
                        mode        : 'javascript',
                        theme       : 'dracula'
                    }} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Js)