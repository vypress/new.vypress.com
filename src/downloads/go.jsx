import React from 'react';
import products from '../products.js';
import OtherDownload from './other';
import ChatTermDownload from './chatterm';

import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";

export default _=> {
const urlParams = new URLSearchParams(useLocation().search);
let prod = urlParams.get('prod').toLowerCase();

switch(prod)
{
 case 'chatterm':
    return <ChatTermDownload/>;
 case 'other':
    return <OtherDownload/>;
}

const messengerProd = 'messenger';

let goProduct = products.find(p=>p.id==prod);

if(!goProduct){
    prod = messengerProd;
    goProduct = products.find(p=>p.id==prod);
}

return <>
    <h2 className="progress">While you are downloading&hellip;</h2>

    <p>The distribution file <strong>{goProduct.filename}</strong> should 
    start downloading in a moment. If it doesn&rsquo;t, you should be able to start the 
    download by <a href={goProduct.urlAltDownload} target="_blank"><strong>clicking here</strong></a>.
    </p>

    <h3>While the distribution file {goProduct.filename} is downloading you may:</h3>
    <ul>

    <li>If you haven&rsquo;t ordered yet, you can <a href="/buy/online/"><strong>order online now</strong></a></li>

    {prod==messengerProd ?
    <li>Browse the <strong><a href="/lan_instant_messenger/kb/faq">Frequently Asked Questions</a></strong> about Vypress Messenger
    </li> : null }

    { goProduct.linkFeatures ? 
    <li>Read <strong><a href={goProduct.linkFeatures}>comprehensive description of {goProduct.name} features</a></strong>
    </li> : null }

    <li>See short <a href="/"><strong>overview of all VyPRESS Research products</strong></a></li>
    </ul>
    <iframe height="0" id="iframeDl" width="0" src={goProduct.urlPrimDownload} frameborder="0"></iframe>
    </>
}
