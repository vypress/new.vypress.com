import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import getRoutes from "./routes.js"
import {useRouteMatch} from 'react-router-dom';

export default props => {
const routes = getRoutes(useRouteMatch().path);

const match = routes.find(route=>useRouteMatch(route));

props.topics.push({label: match.topic, link: match.path});

return <>
<Helmet>
	<title>Trial Versions And Free Upgrades Of VyPRESS Software</title>
    <link rel="stylesheet" href="/css/download.css" />
    <link rel="start" href="/" />
	<link rel="up" href="/" />
</Helmet>

<Shapka LogoImg='/images/download/pagelogo.gif' HeaderImg='/images/download/download.gif' TopImg='/images/download/software.gif' TopAlt='software'>Software Downloads</Shapka>

<div className="innerBody">
<div className="pageBody">
<div className="pageContent">
{match.tabContent}
</div> {/*pageContent*/}
</div> {/* pageBody */}
</div> {/* innerBody */}
</>
}