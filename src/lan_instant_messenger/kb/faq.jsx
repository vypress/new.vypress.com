import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>
<Helmet>
<title>Vypress Messenger FAQ (Frequently Asked Questions)</title>
</Helmet>

<h2>Vypress&nbsp;Messenger FAQ</h2>
<table>
<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>Is it possible to configure Vypress Messenger so that users are able to <b>receive</b> messages but not <b>send</b> messages?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Yes, it is possible. We have developed a special &quot;receive-only&quot; program called <a href="/one_way_messenger">Vypress Auvis</a>. Vypress Auvis is specifically designed for users with locked-down workstations. Auvis receives messages from Vypress Messenger, WinPopup and other similar sources, but it does NOT allow users to send messages. It has a very simple interface and many hidden configuration settings (for example, you can adjust the settings to prevent users from closing Auvis or even from moving or resizing the program's window). For more information, please visit <a href="http://www.vypress.com/one_way_messenger/" target="_top">http://www.vypress.com/one_way_messenger/</a>.
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite> Is there a way to replicate the address book from one computer to the other so I don't have to rekey all the users and IP addresses?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Yes. Look in the folder where you have Vypress Messenger installed for the file <code>AddressBookMaintenance.exe</code>. Use it to export or import Address Book content. See <b><a href="./map_group">HOW-TO: Shared Users Group in Vypress Messenger's Address Book</a></b> for additional information. 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>How does IP-Multicast work?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
IP-Multicast works by enabling network systems to join a multicast group that is identified by a multicast address. Multicast addresses are in the range of 224.0.0.0 to 239.255.255.255. Vypress Messenger and Vypress Auvis can join to an unlimited number of multicast groups. For example, when a desktop user joins the address, 225.100.100.100, all of the messages sent to that address from any other system will be received. The advantage of multicast is that the network cards do not have to listen to every network message, just the multicast address that's been joined. 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>What about systems that aren't reachable via multicast?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Multicast relies on network routers to forward multicast packets correctly. Some routers may not support multicast or may not be configured correctly; as a result some network clients will not receive multicast packets correctly. For these systems, Vypress Messenger can use regular IP datagrams. 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>What is the purpose of the upper window in Vypress Messenger?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
This window shows incoming messages.
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>Is Vypress&nbsp;Messenger compatible with standard WinPopup from Win95/98?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Yes. Beginning with version 2.5, Vypress Messenger has been able to receive standard WinPopup, Windows NT&reg; Messenger Service, Linux SMB and Novell NetWare&reg; messages. Since version 3.0, Vypress Messenger has also been able to <i>send</i> messages to such receivers. If you want to send messages to an SMB-compatible receiver (such as WinPopup from Windows 9x, Messenger Service from NT/2000 or Samba from Unix/Linux) you must prefix it with <b>SMB:</b> chars. For example: <code>SMB:COMPUTERNAME</code>. To send a message to the entire Windows domain/workgroup, you should type the address like this: <code>SMB://DOMAINNAME/*</code> 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>How do I add items to the drop-down list in the main window?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Two methods exist for this task. First , use the <b>Message-&gt;Add sender to...</b> command. Second, use the Address Book (<b>View-&gt;Address Book...</b>) 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>We downloaded your program and it works well except for one thing. When we first boot a computer and try to send mail, it tries to initiate the modem. If we cancel that, it recognizes the network and then sends mail as it should. It then works fine until the computer is rebooted. This is happening with all the computers in the network.</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Unneeded dial-up connections are not Vypress Messenger errors; the problem above is a Windows behavior. To resolve this problem, switch off TCP protocol usage in Vypress Messenger on all computers in your network and use only UDP protocol. To switch off TCP protocol, open Preferences dialog and clear the appropriate checkmark on the <b>Network</b> tab. 
<br/></td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>How do I setup e-mail checking in Vypress Messenger?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
You can set this up easily through the <b>Preferences</b> dialog, <b>E-mail</b> tab. 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>When adding a new user, it's asking for the user host and user name. What is the user host? </cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
The user host can be the TCP/IP address of the user's computer (for example: <code>193.233.152.2</code>), the DNS name of the user's computer (for example: <code>comp1.vypress.com</code>), or the computer name from Windows' &quot;Network Neighborhood&quot; (for example: <code>COMPUTER1</code>). 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>Is it possible to send messages to some users simultaneously (like to workgroups in WinPopup)?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Yes. Vypress Messenger provides the ability to intelligently send messages to individual users, groups, or both. For example, a sales manager could send a message to the "Sales" group announcing a new pricing plan or promotion. Only those users who are part of the Sales group would receive the message. Groups can be easily organized by department, function, geographic area, etc. You can create an unlimited number of groups using the Address Book (Menu <b>View-&gt;Address Book</b>).
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>Does your product have different levels of messages? Like Alerts or Warnings as well as just information or chat messages ?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
Yes, Vypress Messenger supports both normal and high priority messages. To send a high priority message you can use <b>Send as high priority message</b> in the <b>Message</b> menu. 
</td></tr>

<tr vAlign="top">
<td><b style={{color: '#0056B5'}}>Q:</b></td>
<td>
<cite>Does the recipient of the message need a mouse to maneuver through the message or can it be maneuvered through keyboard operations only?</cite>
</td></tr><tr vAlign="top">
<td><b style={{color: '#00B503'}}>A:</b></td>
<td>
All Vypress Messenger's operations can be performed using the keyboard only.
</td></tr>
</table>
</>