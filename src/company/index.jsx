import {Helmet} from 'react-helmet';
import React from 'react';
import Shapka from '../components/Shapka';
import TabbedBody from '../components/TabbedBody';

export default _ => <>
<Helmet>
	<title>About VyPRESS Research, the leader in intranet instant messaging technologies</title>
</Helmet>

<Shapka LogoImg='/images/company/company-logo.gif' HeaderImg='/images/company/company.gif' TopImg='/images/company/our.gif' TopAlt='About our company'>Our Company</Shapka>

<TabbedBody Section='corp' SelectedTab="info">
<div className='pageContent'>
<h2>Introduction</h2>
<p>Founded in&nbsp;1997, VyPRESS&nbsp;Research is a&nbsp;leading provider of 
	instant messaging solutions for LANs/WANs and customized instant messaging 
	systems for business. The&nbsp;Company's products are currently licensed in 
	more than 60&nbsp;countries. VyPRESS's clientele includes large corporations, 
	government education entities and individual users worldwide.</p>
<p>Each member of VyPRESS's programming staff is an&nbsp;expert in communications, 
	networking and text retrieval. Their expertise is focused on developing custom 
	solutions for electronic mail management, custom editors and browsers for html 
	text management, TCP/IP applications for&nbsp;LANs and&nbsp;intranets, tools 
	for wide area and local area network management and http server development.</p>
<p>At&nbsp;VyPRESS&nbsp;Research, simplicity and elegance are greatly appreciated, 
	practiced, and achieved. Buy our products, use our services, and you will come 
	to appreciate that too. Come to VyPRESS, and we will help&nbsp;you.</p>

<h2>Registered Office</h2>
<dl style={{fontStyle:'italic'}}>
	<dd><b>VyPRESS Research, LLC</b></dd>
	<dd>16192 Coastal Hwy,</dd>
	<dd>Lewes, DE 19958,</dd>
	<dd>USA</dd>
	<dd>&nbsp;</dd>
	<dd>Fax: +1 (508) 526-5876</dd>
</dl>
</div>{/* pageContent */}
</TabbedBody>
</>