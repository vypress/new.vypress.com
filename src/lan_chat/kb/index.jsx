import { Route, Switch, useRouteMatch } from "react-router-dom";

import {Helmet} from "react-helmet";
import Igmp from "./igmp"
import ImgConv from "./imgconv"
import React from 'react';

export default props => 
{
	const {path} = useRouteMatch();

	return <>

		<Helmet>
		<title>Vypress Chat Knowledge Base</title>
		</Helmet>

		<Switch>
			<Route path={`${path}/kb/igmp`}><Igmp/></Route>
			<Route path={`${path}/kb/imgconv`}><ImgConv/></Route>
			<Route path={`${path}/kb`}>
				<h2>Vypress&nbsp;Chat Documents and Whitepapers:</h2>
				<ul className="featlist" style={{fontSize:'larger', fontWeight:'bolder'}}>
					<li><a href="igmp">Configuring IP multicast routing on Windows Server 2008</a></li>
					<li><a href="imgconv">How to customize emoticons in the Vypress Chat</a></li>
				</ul>
			</Route>
		</Switch>
	</>
};

