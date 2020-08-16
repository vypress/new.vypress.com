import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import res from '../resources';

export default props => <>
<Helmet>
	<title>Instant messaging software for LANs and business Intranets</title>
	<link rel='stylesheet' href='/css/start.css' />
</Helmet>

<Shapka LogoImg='/images/start/vypress.gif' HeaderImg='/images/start/vypresscom.gif' TopImg='/images/start/welcometo.gif' TopAlt={res.Start_WelcomeTo}>{res.Start_H1}</Shapka>

<div className="innerBody">
<div className="pageBody">
<div className="pageContent">
<strong>Welcome to the VyPRESS Research Site!</strong>
<br/>We are creators of fault tolerant communications software for local network, intranet, and WAN environments. If you need fast, high-privacy messaging, our very affordable products offer smooth interoperability and a user-friendly interface.
<p>
<a href="/home"><img src="/images/pix/arrowblue.gif" width="4" height="6" alt=">" />&nbsp;Quick overview of all our solutions and products</a>
</p>
{/*pageContent*/}
</div>
{/*pageBody*/}
</div>
{/*innerBody*/}
</div>
</>