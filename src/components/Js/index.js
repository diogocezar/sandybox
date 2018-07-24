import React, { Component, Fragment } from 'react';

class Js extends Component {
    render() {
        return (
            <Fragment>
                <textarea id="js" className="language-js" defaultValue={this.props.children} />
            </Fragment>
        );
    }
}

export default Js;