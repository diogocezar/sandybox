import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import './js.css'

class Js extends Component {
    changeJs = (e) => {
        this.props.setJs(e.target.value)
    }
    render() {
        return (
            <Fragment>
                <textarea id="js" className="language-js" defaultValue={this.props.sandybox.js} onKeyUp={this.changeJs} />
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Js)