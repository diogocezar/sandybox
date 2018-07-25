import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import './css.css'

class Css extends Component {
    changeCss = (e) => {
        this.props.setCss(e.target.value)
    }
    render() {
        return (
            <Fragment>
                <textarea id="css" className="language-css" defaultValue={this.props.sandybox.css} onKeyUp={this.changeCss} />
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Css)