import React, { Component, Fragment } from 'react'

import './front-page.css'

class FrontPage extends Component {
	render() {
		return (
			<Fragment>
				<div class="container-front-page">
					<div class="box-center">
						<img src={require('../../assets/images/sandybox.svg')} alt="Logotipo do SandyBox" className="logo-sandybox" />
						<h1>SandyBox</h1>
						<p>Welcome to SandyBox, to acess the system, you need to provide a route, see the example:</p>
						<a href="/#/hello-world">Hello World!</a>
						<a href="https://github.com/diogocezar/sandybox" target="_blank" className="link-github">
							<img src={require('../../assets/images/github.svg')} alt="Logo GitHub" />
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default FrontPage