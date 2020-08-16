import QuickInfo from '../../components/QuickInfo';
import React from 'react';
import products from '../../products.js';

export default props =><>

<h2>What is Vypress Chat</h2>

<a href="screenshots" id="roundSshot"><img src="/images/lan_chat/chat-shot.gif" alt="Click to see Vypress Chat screenshots"/></a>

<p>
Vypress Chat is a user-friendly application for real-time 
chatting in small office or home office (SOHO) local networks. 
This unique chat software features an easy-to-understand format
for text-based conferences and discussions. Vypress Chat does 
not require an Internet connection or a dedicated server to support 
discussions, and all users have equal access 
to the application&rsquo;s tools and functions. Vypress Chat 
enables individuals to instantly communicate about joint projects, 
and managers can send instantaneous memos to individuals, 
departments, or the entire company.
</p>

<QuickInfo Product={products.find(p=>p.id=='chat')}/>

<h3>No Network Management Needed</h3>
<p>
At VyPRESS, we recognize that most small local area networks (<acronym title="Local Area Network">LAN</acronym>s) have no 
professional network administrator to manage software installation and 
provide user training. Thus, one of our major goals when creating 
Vypress Chat was to develop chat software with absolutely zero 
management requirements. To achieve this, we deliberately left out certain 
advanced configuration features in order to make <span className="nw">Vypress Chat</span> 100% 
chat-ready immediately after installation. Now, all you need to create the 
easiest and most comfortable &ldquo;talk environment&rdquo; available for 
your <acronym title="small office or home office">SOHO</acronym> network is to install the all-new Vypress Chat!
</p>
<h3>Getting Started is Easy</h3>
<p>
After installation, Vypress Chat will automatically start 
with Windows, and the appropriate icons will be added to the notification 
area of the Taskbar (near the clock). At startup, all Vypress Chat 
users in the network will join one common chat channel (<i>#Main</i>). 
However, users are not limited to this one channel &mdash; they can 
create as many new channels as desired and initiate private discussions on 
completely private channels. Users can also send messages at any time 
to other online &ldquo;buddies&rdquo; (all users are visible who have 
Vypress Chat running in your network). Users can send and receive instant 
messages and begin chatting immediately after installation.
</p>
<h3>Research &amp; Development Pays Off</h3>
<p>
We created Vypress Chat after studying how busy professionals use their 
computers and networks in actual working environments. As a result of 
these studies, during development we concentrated on usefulness, efficiency and 
simplicity. The result? Vypress Chat&rsquo;s interface is attractive, 
simple-to-use and customizable, and Vypress Chat offers 
you features similar to the best aspects found in 
our competitor&rsquo;s applications. You get an interface comparable 
to mIRC&rsquo;s graphical <acronym title="Internet Relay Chat">IRC</acronym> interface, and system tray functionality similar to that of ICQ.
</p>
<p>
If you have computers connected in your home or office, Vypress Chat takes 
full advantage of your network to enrich communication and streamline 
productivity!
</p>

<noscript className="setoy">
	<h2>Vypress Chat: chat software for LAN that works!</h2>
</noscript>
</>
