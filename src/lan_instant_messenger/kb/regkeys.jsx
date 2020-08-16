import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>
<Helmet>
<title>TIP: The secret registry keys of Vypress Messenger</title>
<link rel="stylesheet" href="/css/article.css" />
</Helmet>
<h2>The &ldquo;secret&rdquo; registry keys of the Vypress&nbsp;Messenger</h2>

<ul className="toc">
	<li><a href="#intro">Introduction</a></li>
	<li><a href="#MessageCountLimit">MessageCountLimit</a></li>
	<li><a href="#BlinkTrayIcon">BlinkTrayIcon</a></li>
	<li><a href="#VerifyUDPMessages">VerifyUDPMessages</a></li>
	<li><a href="#AddressBookPath">AddressBookPath</a></li>
	<li><a href="#UDP">UDP Port</a></li>
	<li><a href="#OriginalMessageSeparator">OriginalMessageSeparator</a></li>
	<li><a href="#EnableBroadcastFinding">EnableBroadcastFinding</a></li>
</ul>

<hr className="silverline" />

<h3 id="intro">Introduction</h3>
<p>Most 
Vypress Messenger features are controlled via user interface. However, during 
the product development process, we added a few undocumented registry values 
that affect various minor behaviors within the program. All these values should 
be placed in the registry key: <code>HKEY_CURRENT_USER\Software\VyPRESS\Messenger\Settings</code>. 
This Web page describes these values and their effects.</p>
<p><img src="/images/one_way_messenger/kb/img/regedit.jpg" width="342" height="221" alt="" className="floatimg" />
This document describes all these values and their effects.</p>
<p>
<b>IMPORTANT:</b> This article contains information about editing the registry. 
Before you edit the registry, make sure you understand how to restore it if a 
problem occurs. For information about how to do this, view the <i>Restoring the 
Registry</i> Help topic in Regedit.exe or the <i>Restoring a Registry Key</i>
Help topic in Regedt32.exe.</p>
<p>
<b>WARNING:</b> Using Registry Editor incorrectly can cause serious problems 
that may require you to reinstall your operating system. Microsoft cannot 
guarantee that problems resulting from the incorrect use of Registry Editor can 
be solved. Use Registry Editor at your own risk.
<br/>
<br/>
For information about how to edit the registry, view the <i>Changing Keys And 
Values</i> Help topic in Registry Editor (Regedit.exe) or the <i>Add and Delete 
Information in the Registry</i> and <i>Edit Registry Data</i> Help topics 
in Regedt32.exe. Note that you should back up the registry before you edit it. 
If you are running Windows NT, you should also update your Emergency Repair 
Disk (ERD).</p>

<h3 id="MessageCountLimit">MessageCountLimit <em>DWORD</em></h3>
<p>
By default, Vypress Messenger stores only the last 100 incoming messages. This 
key allows you to set a different number for saving incoming messages to 
memory. It is not recommended that you change this value without critical need, 
because it can negatively affect overall program performance.</p>

<h3 id="BlinkTrayIcon">BlinkTrayIcon <em>DWORD</em></h3>
<p><img src="/images/lan_instant_messenger/kb/tar-icon-blink.gif" width="186" height="28" alt="" className="floatimg"/>
By default, the Vypress Messenger tray icon blinks when new messages arrive. 
However, you can switch this behavior off by setting this value to 0. By 
default, this value is missing and is assumed to be equal to 1. 
</p>

<h3 id="VerifyUDPMessages">VerifyUDPMessages <em>DWORD</em></h3>
<p>
Vypress Messenger attempts to receive a verification response for each message 
sent over UDP protocol. However, this action can produce incompatibility with 
oldest versions of Messenger (before 2.5.5). To disable verification of 
messages sent over UDP protocol, set this value to 1.
</p>

<h3 id="AddressBookPath">AddressBookPath <em>String</em></h3>
<p>
This key allows you to specify alternative locations for the Address Book. The 
Address Book is placed by default in the folder: <code>C:\Windows\Profiles\Application\Data\VyPRESS\Address 
Book</code> (or similar). By changing this value, you can change the 
default and place Address Book files in another location. This is a second 
method to create a network-shared Address Book (as an alternative to the 
standard method described in <a href="map_group"><b>HOWTO: Shared Users Group in 
	Vypress Messenger's Address Book</b></a>). VyPRESS Research cannot 
guarantee that this method will work with stability and manageable ease. Use 
this value at your own risk.
</p>
<p>
Since version 3.0 this value is located in the following registry key: <code>HKEY_CURRENT_USER\Software\Vypress\Address 
	Book</code>
</p>


<h3 id="UDP">UDP Port <em>DWORD</em></h3>
<p>
Vypress Messenger allows you to specify (through the <b>Preferences</b> dialog) 
using the same port for both TCP and UDP protocol. Using this registry value, 
you can specify a different value for the UDP port. This can be useful for 
certain security or routing issues. 
</p>

<h3 id="OriginalMessageSeparator">OriginalMessageSeparator <em>String</em></h3>
<p>
In Vypress Messenger version 2.8, we added the string <b>"---- Original message 
	----"</b> to appear before quoted messages within the text editor window. 
In previous versions, Vypress Messenger simply quoted messages with thesymbol 
"&gt;" and did not include any other strings. If you want to keep the behavior 
of the old auto-quoting feature, you can do so by setting this registry value 
to"&gt;" (<i>OriginalMessageSeparator="&gt;"</i>). After changing this value, 
the string <b>"---- Original message ----"</b> will no longer appear before 
quoted messages. 
</p>

<h3 id="EnableBroadcastFinding">EnableBroadcastFinding <em>DWORD</em></h3>
<p>
By default, Vypress Messenger 3.0 tries to find an IP address of an unresolved 
string using special broadcasts (or multicast). This feature allows you to send 
a message using the addressee's full user name (i.e "John Smith") or e-mail 
address as the destination address. One potential drawback of this ability is 
that message sending delays are possible should you accidentally mistype an 
address. <b>EnableBroadcastFinding</b> allows you to prevent Vypress Messenger 
from resolving strings with broadcasts by setting this value to 0.<br/>
<u>Note: by setting this to zero you will be unable to send messages using e-mail 
	addresses, nicknames or full names of addressees.</u><br/>
By default this value is set to 1. 
</p>
</>