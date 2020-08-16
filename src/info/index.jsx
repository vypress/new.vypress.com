import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import TabbedBody from '../components/TabbedBody';
import getRoutes from "./routes.js"
import {useRouteMatch} from 'react-router-dom';

export default props => {

    const routes = getRoutes(useRouteMatch().path);

    const match = routes.find(route=>useRouteMatch(route));

    props.topics.push({label: match.topic, link: match.path});

    return <>
    <Helmet>
    <title>About VyPRESS Research, the leader in intranet instant messaging technologies</title>
   </Helmet>

    <Shapka LogoImg='/images/start/vypress.gif' HeaderImg='/images/start/vypresscom.gif'  TopImg="/images/start/welcometo.gif" TopAlt="About our company">Our Company</Shapka>

    <TabbedBody Section='site' SelectedTab={match.tabSection}>
    {match.tabContent}
    </TabbedBody>
    </>
}