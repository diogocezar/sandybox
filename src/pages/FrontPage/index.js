import React, { Component, Fragment } from 'react'

import './front-page.css'

class FrontPage extends Component {
	render() {
		return (
			<Fragment>
				<div className="container-front-page">
					<div className="box-center">
						<img src={require('../../assets/images/sandybox.svg')} alt="Logotipo do SandyBox" className="logo-sandybox" />
						<h1>SandyBox</h1>
						<p>Welcome to SandyBox, to acess the system, you need to provide a route, see the example:</p>
						<a href="https://diogocezar.github.io/sandybox/#/hello-world" target="_blank" rel="noopener noreferrer">Hello World!</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FrontPage