import React, { Component, Fragment } from 'react'
import { HashRouter, Route, Switch }  from 'react-router-dom'
import Main                           from '../pages/Main'
import FrontPage                      from '../pages/FrontPage'

class Routes extends Component {
	render() {
		return(
			<HashRouter>
				<Fragment>
					<Switch>
						<Route exact path="/" component={FrontPage} />
						<Route path="/:id" component={Main} />
					</Switch>
				</Fragment>
			</HashRouter>
		)
	}
}

export default Routes