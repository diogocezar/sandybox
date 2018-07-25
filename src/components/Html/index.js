import React, { Component, Fragment } from 'react';

import { bindActionCreators }         from 'redux'
import { connect }                    from 'react-redux'

import * as sandyboxActions           from '../../actions/sandybox'

import './html.css'

class Html extends Component {
    changeHtml = (e) => {
        this.props.setHtml(e.target.value)
    }
    render() {
        return (
            <Fragment>
                <textarea id="html" className="language-html" defaultValue={this.props.sandybox.html} onKeyUp={this.changeHtml} />
            </Fragment>
        );
    }
}

const mapStateToProps    = state    => state
const mapDispatchToProps = dispatch => bindActionCreators(sandyboxActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Html)