import React, { Component, Fragment } from 'react';

class Html extends Component {
    render() {
        return (
            <Fragment>
                <textarea id="html" className="language-html" defaultValue={this.props.children}/>
            </Fragment>
        );
    }
}

export default Html;