import React, { Component, Fragment } from 'react';
import Html                           from '../Html'
import Css                            from '../Css'
import Js                             from '../Js'

import './editors.css'

class Editors extends Component {
	render() {
		return (
			<Fragment>
				<div className="editors">
					<Css />
					<Html />
					<Js />
				</div>
			</Fragment>
		);
	}
}

export default Editors;