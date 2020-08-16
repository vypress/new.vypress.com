import { Route, Switch, useRouteMatch } from "react-router-dom";

import Faq from "./faq"
import {Helmet} from "react-helmet";
import MapGroups from "./map_group"
import React from 'react';
import RegKeys from "./regkeys"
import SendExe from "./send_exe"

export default props => 
{
	let {path} = useRouteMatch();

	return <>

		<Helmet>
		<title>Vypress Messenger Knowledge Base</title>
		</Helmet>

		<Switch>
			<Route path={`${path}/kb/regkeys`}><RegKeys/></Route>
			<Route path={`${path}/kb/send_exe`}><SendExe/></Route>
			<Route path={`${path}/kb/faq`}><Faq/></Route>
			<Route path={`${path}/kb/map_group`}><MapGroups/></Route>
			<Route path={`${path}/kb`}>
				<h2>Vypress&nbsp;Messenger Documents and Whitepapers:</h2>
				<ul className="featlist" style={{fontSize:'larger', fontWeight:'bolder'}}>
					<li><a href="faq">Vypress Messenger FAQ</a></li>
					<li><a href="regkeys">Vypress&nbsp;Messenger Registry Keys</a></li>
					<li><a href="send_exe">Examples of SEND.EXE usage</a></li>
					<li><a href="map_group">Shared Users Group in Vypress&nbsp;Messenger's Address&nbsp;Book</a></li>
				</ul>
			</Route>
		</Switch>
	</>
};

