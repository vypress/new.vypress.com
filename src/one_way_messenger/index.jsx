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
    <title>Vypress Auvis: network-wide alerts and one way messaging</title>
    <link rel="stylesheet" href="/css/product.css" />
    </Helmet>

    <Shapka LogoImg='/images/one_way_messenger/va-logo.gif' HeaderImg='/images/one_way_messenger/auvis.gif' TopImg='/images/design/top/vypress.gif' TopAlt='Vypress Auvis'>Auvis: One way messages receiver for network-wide alerts</Shapka>

    <TabbedBody Section='auvis' SelectedTab={match.tabSection}>
    {match.tabContent}
    </TabbedBody>
    </>
}