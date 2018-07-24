import React, { Component, Fragment } from 'react';

class Css extends Component {
    render() {
        return (
            <Fragment>
                <textarea id="css" className="language-css" defaultValue={this.props.children}/>
            </Fragment>
        );
    }
}

export default Css;