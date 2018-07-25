import React, { Component, Fragment } from 'react'

import './loading.css'

class Loading extends Component {
	render() {
		return (
			<Fragment>
				<div class="container-loading">
					<div class="box-center">
						<img src={require('../../assets/images/sandybox.svg')} alt="Logotipo do SandyBox" />
						<h1>SandyBox</h1>
						<h2>Carregando</h2>
						<p>Aguenta ai ;)</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Loading