import {Helmet} from 'react-helmet';
import QuickInfo from '../../components/QuickInfo';
import React from 'react';
import products from '../../products.js';

export default props =><>
<Helmet>
<meta Description="Vypress Auvis - is universial one way instant messaging client which allows users to receive network messages but don&quot;t provide access to send messages." />
<title>Vypress Auvis: network-wide alerts and one way messaging</title>
</Helmet>

<h2>What is Vypress Auvis</h2>
<a href="screenshots" id="roundSshot">
<img src="/images/one_way_messenger/auvis-shot.gif" alt="Click to see Vypress Auvis screenshots"/>
</a>

<p>
Vypress Auvis is a user-friendly, universal, one-way messaging client that runs in the system tray, allowing users to receive messages, network-wide alerts and broadcasts from network administrators. Auvis even provides e-mail notification.
</p>
<p>
Vypress Auvis is oriented toward the non-professional user. It fulfills the function of a message processor, but does not allow users to send messages. One of the key features in Auvis is the ability to disable one or all of the extra features (for example, closing the program) through <strong><a href="kb/regkeys">special registry keys</a></strong>. If you are the administrator of a corporate <acronym title="Local Area Network">LAN</acronym> or <acronym title="Wide Area Network">WAN</acronym> and are looking for broadcasting and unicasting services for a middle to large network, Auvis is the ideal program for you and your network!
</p>

<QuickInfo Product={products.find(p=>p.id=='auvis')}/>

<p>
Vypress Auvis can receive messages from <strong><a href="/lan_instant_messenger/">Vypress Messenger</a></strong> (direct <acronym title="Transmission Control Protocol">TCP</acronym> messages plus <acronym title="User Datagram Protocol">UDP</acronym> broadcasts), from WinPopup/Messaging Service (Windows 2000,XP,7,8 and 10), and from any Unix system that is <acronym title="Server Message Block protocol">SMB</acronym> protocol enabled.
</p>
<p>
Vypress Auvis, written in Microsoft Visual C++, is efficient (uses 400 KB of <acronym title="Random Access Memory">RAM</acronym>), fast and can be run under any Windows environment. Support for <acronym title="User Datagram Protocol">UDP</acronym> broadcast messages includes a full set of security settings, including the ability to enable or disable messages from a specified IP-address or address mask. The user-friendly interface is incredibly popular with novice users.
</p>

<p>
Today, Auvis is the most unique program of its kind on the market. It is specially designed for one-way message processing and does not in any way alter the original, full-featured <a href="../messenger/">Vypress Messenger</a>.
</p>

<p>
When vital information must be communicated across an entire organization, time is of the essence. How do you instantly deliver a spontaneous, important message to 10 people - or possibly 10,000 people - in today's dynamic business climate?
</p>
<p> 
VyPRESS has addressed this important communication challenge with Vypress Auvis and Vypress Messenger, a software solution that makes one-way notification fast, easy and accurate. Simple one-click access utilizes text and sound to notify any group of users, across a network or around the world, of important events or emergency procedures that require immediate attention, response or action.  Vypress Messenger can deliver thousands of instant alert messages to Auvis customers in seconds!
</p>

<noscript className="setoy">
	<h2>Emergency broadcasting software and network-wide alerts</h2>
</noscript>
</>
