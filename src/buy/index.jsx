import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import TabbedBody from '../components/TabbedBody';
import getRoutes from "./routes.js"
import {useRouteMatch} from 'react-router-dom';

export default props => {
const routes = getRoutes(useRouteMatch().path);

const match = routes.find(route=>useRouteMatch(route));

props.topics.push({label: "Shop VyPRESS", link: "/buy"});

if(match.topic) {
    props.topics.push({label:match.topic, link:match.path});
}

return <>
<Helmet>
	<title>How to buy VyPRESS's products</title>
    <link rel="stylesheet" href="/css/buy.css" />
    <script type="text/javascript" src="/scripts/buy/shop_calc.js"></script>
</Helmet>

<Shapka LogoImg='/images/buy/order_pix.gif' HeaderImg='/images/buy/howtobuy.gif' TopImg='/images/buy/vypresssoft.gif' TopAlt='VyPRESS software'>How to buy VyPRESS software</Shapka>

<TabbedBody Section='purchase' SelectedTab={match.tabSection} Buy={true}>
    {match.tabContent}
</TabbedBody>
</>
}