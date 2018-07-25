import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CodeMirror from 'react-codemirror';
import * as sandyboxActions from '../../actions/sandybox'

import './css.css'
import 'codemirror/mode/css/css'

class Css extends Component {
    changeCss = (css) => {
        if(!css)
            css = ' '
        this.props.setCss(css)
    }
    render() {
        return (
            <div className="container">
                <h1>CSS</h1>
                <Fragment>
                    <CodeMirror value={this.props.sandybox.css} onChange={this.changeCss} options={{
                        lineNumbers : true,
                        mode        : 'css',
                        theme       : 'dracula'
                    }}/>
                </Fragment>
            </div>
        )
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Css)