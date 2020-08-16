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
    <title>Vypress Messenger: Instant messenger for LAN</title>
	<meta Description = "Vypress Messenger lets you instantly exchange text messages with other users across the Internet or any TCP/IP network. This utilitity is an excellent replacement for the WinPopup utility that comes with Windows. It is compatible with the SMB protocol, which allows messages to be received from Windows 95/98 WinPopup, Windows NT Messenger Service, Linux and Novell NetWare. There are message filtering options and a mail notification option that can work with IMAP4 servers. An address book is included." />
    <link rel="stylesheet" href="/css/product.css" />
   </Helmet>

    <Shapka LogoImg='/images/lan_instant_messenger/messenger-logo.gif' HeaderImg='/images/lan_instant_messenger/messenger.gif' TopImg='/images/design/top/vypress.gif' TopAlt='Vypress Messenger'>{res.Messenger_H1}</Shapka>

    <TabbedBody Section='messenger' SelectedTab={match.tabSection}>
	{match.tabContent}
    </TabbedBody>
    </>
}