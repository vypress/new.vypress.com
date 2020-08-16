import { Route, Switch, useRouteMatch } from "react-router-dom";

import Deployment from "./deployment"
import {Helmet} from "react-helmet";
import React from 'react';
import RegKeys from "./regkeys"

export default props => 
{
	let {path} = useRouteMatch();

	return <>

		<Helmet>
		<title>Vypress Auvis - the universal one way instant messaging client</title>
		</Helmet>

		<Switch>
			<Route path={`${path}/kb/regkeys`}><RegKeys/></Route>
			<Route path={`${path}/kb/deployment`}><Deployment/></Route>
			<Route path={`${path}/kb`}>
				<h2>Vypress Auvis Documents and Whitepapers:</h2>
				<ul className="featlist" style={{fontSize:'larger', fontWeight:'bolder'}}>
					<li><a href="./regkeys">Vypress&nbsp;Auvis Registry Keys</a></li>
					<li><a href="./deployment">Easier Deployment and Administering with Vypress&nbsp;Auvis.</a></li>
				</ul>
			</Route>
		</Switch>
	</>
};

