import { Helmet } from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import TabbedBody from '../components/TabbedBody';
import getRoutes from "./routes.js"
import res from '../resources';
import { useRouteMatch } from 'react-router-dom';

export default props => {

    const routes = getRoutes(useRouteMatch().path);

    const match = routes.find(route => useRouteMatch(route));

    props.topics.push({label: match.topic, link: match.path});

    return <>
        <Helmet>
            <title>VyPRESS Research: Technical Support Home</title>
        </Helmet>

        <Shapka LogoImg='/images/support/support.gif' HeaderImg='/images/support/technical-support.gif' TopImg='/images/support/services.gif' TopAlt='services and support'>{res.Support_H1}</Shapka>
        
        <TabbedBody Section='support' SelectedTab={match.tabSection}>
            {match.tabContent}
        </TabbedBody>
    </>
}