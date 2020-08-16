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

    props.topics.push({label: match.topic, link: match.path});

    return <>
    <Helmet>
    <title>Vypress Chat - easy and fast LAN chat</title>
    <meta Description = "Vypress Chat is a user-friendly application for real-time chatting in small office or home office (SOHO) local networks. This unique chat software features an easy-to-understand format for text-based conferences and discussions."/>
    <link rel="stylesheet" href="/css/product.css" />
   </Helmet>

    <Shapka LogoImg='/images/lan_chat/chat-logo.gif' HeaderImg='/images/lan_chat/chat.gif' TopImg='/images/design/top/vypress.gif' TopAlt='Vypress Chat'>{res.Chat_H1}</Shapka>

    <TabbedBody Section='chat' SelectedTab={match.tabSection}>
    {match.tabContent}
    </TabbedBody>
    </>
}