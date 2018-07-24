import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch }  from 'react-router-dom'
import Main                           from '../../containers/Main'

class Home extends Component {
	render() {
		return(
			<HashRouter>
				<Fragment>
					<Switch>
						<Route path="/:id" component={Main} />
					</Switch>
				</Fragment>
			</HashRouter>
		)
	}
}

export default Home