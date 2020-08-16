import { Route, Switch, useRouteMatch } from "react-router-dom";

import {Helmet} from "react-helmet";
import MessengerUnlimited from "./messenger_unlimited"
import Prices from "./prices"
import React from 'react';

export default props => 
{
	let {path} = useRouteMatch();

	return <div className="pageContent">
		<Switch>
			<Route exact path={`${path}/prices`}><Prices/></Route>
			<Route exact path={`${path}/prices/messenger_unlimited`}><MessengerUnlimited/></Route>
		</Switch>
	</div>
};

