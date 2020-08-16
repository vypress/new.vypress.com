import React from 'react';

export default props => <>
	<h2>Configuring IP multicast routing on Windows Server 2008</h2>
	<p>Windows Server 2008 can be used as a multicast router between IPv4 networks. It requires to install and configure Routing and Remote Access service.</p>
	<h3>Example of configuration multicast routing for Vypress Chat</h3>
	<p>There are two IP networks 192.168.10.0 and 192.168.20.0 connected through a computer that has two network interfaces 192.168.10.3 and 192.168.20.1 installed and running under Windows Server 2008 (below this computer is called "router").</p>
	<a href="/images/lan_chat/kb/network.jpg" target="_blank"><img src="/images/lan_chat/kb/small/network.jpg" alt="Network" /></a>
	<p>Network interfaces of the router should be configured as shown on screenshots below.</p>
	<a href="/images/lan_chat/kb/screen8.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen8.jpg" alt="Interface 192.168.10.3" /></a>
	<a href="/images/lan_chat/kb/screen9.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen9.jpg" alt="Interface 192.168.20.1" /></a>
	<p>To configure routing
	<ol>
			<li>Open the "Routing and Remote Access" Microsoft Management Console Snap-In.</li>
			<li>In the console tree right-click the local computer and add routing protocol IGMP.</li>
			<li>Right-click IGMP, add network interfaces 192.168.10.3 and 192.168.20.1. It have names  "Local Area
		Connection 2" and "Local Area Connection 3" in the example.</li>
			<li>Set all IGMP protocol settings by default.</li>
		</ol>
	</p>
	<a href="/images/lan_chat/kb/screen12.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen12.jpg" alt="New interface" /></a>
	<a href="/images/lan_chat/kb/screen2.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen2.jpg" alt="Routing and Remote Access" /></a>
	<p>It is neccessary to wait for short time interval until the router locates all network nodes that use multicast UDP protocol.</p>
	<p>On the pictures below you can see TCP/IP protocol settings of computers and "Network settings" of Vypress Chat from different network segments.
	It is important to specify a default gateway for each computer in subnetworks.
	</p>
	<a href="/images/lan_chat/kb/screen6.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen6.jpg" alt="Interface 192.168.10.2" /></a>
	<a href="/images/lan_chat/kb/screen4.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen4.jpg" alt="Chat settings on 192.168.10.2" /></a>
	<br />
	<a href="/images/lan_chat/kb/screen1_xp.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen1_xp.jpg" alt="Interface 192.168.20.2" /></a>
	<a href="/images/lan_chat/kb/screen2_xp.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen2_xp.jpg" alt="Chat settings on 192.168.20.2" /></a>

	<p>Open IGMP Group Table dialog to check that all network interfaces are found by the router and multicast group 227.0.0.2 is added successfully.</p>
	<a href="/images/lan_chat/kb/screen13.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen13.jpg" alt="Show Group Table" /></a>
	<a href="/images/lan_chat/kb/screen5.jpg" target="_blank"><img src="/images/lan_chat/kb/small/screen5.jpg" alt="IGMP Group Table" /></a>
	<p>After short time interval (less than 5 minutes) since the configuring finished all Vypress Chat users should have seen each other in contact lists.</p>
</>
