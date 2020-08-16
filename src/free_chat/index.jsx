import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import TabbedBody from '../components/TabbedBody';
import getRoutes from "./routes.js"
import res from '../resources';
import {useRouteMatch} from 'react-router-dom';

export default props => {

    const routes = getRoutes(useRouteMatch().path);

    const match = routes.find(route=>useRouteMatch(route));

    if(match)
    {
        props.topics.push({label: match.topic, link: match.path});

        return <>
        <Helmet>
        <title>Chat Terminal - free chat for many Operating Systems</title>
        <meta Description = "Free, open source command line chat tool for many operation systems."/>
        <meta Keywords = "chat, terminal, command line, free chat, open source chat, LAN chat, network chat"/>
        <link rel="stylesheet" href="/css/product.css" />
    </Helmet>

        <Shapka LogoImg='/images/free_chat/chatterm-logo.gif' HeaderImg='/images/free_chat/chatterm.jpg'>{res.Chat_H1}</Shapka>

        <TabbedBody Section='chatterm' SelectedTab={match.tabSection}>
        {match.tabContent}
        </TabbedBody>
        </>
    }
    else
    {
    return <div>NO MATCH {route.path}</div>
    }
}