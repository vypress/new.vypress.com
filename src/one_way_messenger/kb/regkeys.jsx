import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>
<Helmet>
<title>TIP: Registry Keys of the Vypress Auvis</title>
<link rel="stylesheet" href="/css/article.css" />
</Helmet>

<h2>Vypress&nbsp;Auvis Registry Keys</h2>

<ul className="toc">
	<li><a href="#intro">Introduction</a></li>
	
	<li><a href="#DisableMailNotification">DisableMailNotification</a></li>
	<li><a href="#DisableFileTransferSettings">DisableFileTransferSettings</a></li>
	<li><a href="#DisableFilteringSettings">DisableFilteringSettings</a></li>
	<li><a href="#DisableCustomization">DisableCustomization</a><br /><br /></li>
	
	<li><a href="#MessageCountLimit">MessageCountLimit</a></li>
	<li><a href="#UsingFilesToStoreMessages">UsingFilesToStoreMessages</a></li>
	<li><a href="#BlinkTrayIcon">BlinkTrayIcon</a></li>
	<li><a href="#DisableCloseProgram">DisableCloseProgram</a></li>
	<li><a href="#FixedPlacement">FixedPlacement</a><br /><br /></li>
	
	<li><a href="#LogFile">LogFile</a></li>
	<li><a href="#KeyFileName">KeyFileName</a><br /><br /></li>
	
	<li><a href="#MulticastGroups">MulticastGroups</a></li>
	<li><a href="#DisableUDPThread">DisableUDPThread</a></li>
	<li><a href="#DisableTCPThread">DisableTCPThread</a></li>
	<li><a href="#DisableSMBThread">DisableSMBThread</a></li>
	<li><a href="#TCPPort">TCPPort</a></li>
	<li><a href="#UDPPort">UDPPort</a></li>	
</ul>

<hr className="silverline" />

<h3 id="intro">Introduction</h3>
<p>
The 
primary role of Vypress Auvis is to be a user-friendly message receiver. This 
is why we do not place an overload of settings into Auvis's user interface. 
However, the program's flexibility is amazing; many advanced features can be 
controlled using special Windows registry values. All of these values should be 
placed in any of the following registry keys: <b>HKEY_CURRENT_USER\Software\VyPRESS\Auvis\Settings</b>,
 <b>HKEY_LOCAL_MACHINE\Software\VyPRESS\Auvis\Settings</b> or <b>HKEY_CURRENT_USER\Software\Policies\VyPRESS\Auvis\Settings</b>. 
Vypress Auvis first loads machine-dependent settings from HKEY_LOCAL_MACHINE, 
then it loads current users settings (from HKEY_CURRENT_USER, if it exists), 
then the override global computer setting with individual user settings and, at 
last, it loads current users policy registry settings from 
HKEY_CURRENT_USER\Software\Policies key. This makes it easier to manage 
multi-user computers (no longer is there a requirement to customize each user 
on each computer) and restrict access to partial registry settings in Windows 
NT (where you can deny access to a specified registry key or keys).
</p>
<img src="/images/one_way_messenger/kb/regedit.jpg" width="342" height="221" alt="Registry Editor Screenshot" className="floatimg" />
<p>
This document describes all these values and their effects.
</p>
<p>
<b>IMPORTANT:</b> This article contains information about editing the registry. 
Before you edit the registry, make sure you understand how to restore it if a 
problem occurs. For information about how to do this, view the <i>Restoring the Registry</i> Help topic in Regedit.exe or the <i>Restoring a Registry Key</i>
Help topic in Regedt32.exe.
</p>
<p>
<b>WARNING:</b> Using Registry Editor incorrectly can cause serious problems 
that may require you to reinstall your operating system. Microsoft cannot 
guarantee that problems resulting from the incorrect use of Registry Editor can 
be solved. Use Registry Editor at your own risk.
</p>
<p>
For information about how to edit the registry, view the <i>Changing Keys And 
Values</i> Help topic in Registry Editor (Regedit.exe) or the <i>Add and Delete 
Information in the Registry</i> and <i>Edit Registry Data</i> Help topics 
in Regedt32.exe. Note that you should back up the registry before you edit it. 
If you are running Windows NT, you should also update your Emergency Repair 
Disk (ERD).
</p>

<hr className="silverline" />

<h3 id="DisableMailNotification">DisableMailNotification <em>DWORD</em></h3>
<img src="/images/one_way_messenger/kb/settings-noemail.png" className="floatimg" alt="" />
		
<p>If 
	this value is 1, then the <b>E-mail tab</b> is removed from the <b>Settings</b> 
	dialog (see screenshot).<br />
	Default value is 0.
</p>

<h3 id="DisableFileTransferSettings">DisableFileTransferSettings</h3>
<p>
	If this value is set to 1, the <b>File Transfer</b> tab will not appear in the <b>Settings</b>
	dialog. However, Vypress Auvis still is able to accept messages with 
	attachments. Default is 0.
</p>

<h3 id="DisableFilteringSettings">DisableFilteringSettings <em>DWORD</em></h3>
<img src="/images/one_way_messenger/kb/filtering.jpg" width="370" height="152" className="floatimg" alt="" />
<p>
	Setting this value to 1 disables the <b>Host filtering</b> modification in the 
	Settings dialog (see screenshot). Default value is 0.
</p>

<h3 id="DisableCustomization">DisableCustomization <em>DWORD</em></h3>
<img src="/images/one_way_messenger/kb/toolbar.gif" width="272" height="74" className="floatimg" alt="" />
<p>
	If this value is 1, user can&rsquo;t open the <b>Settings</b> dialog and the <b>Settings</b>
	button is removed from the toolbar (see picture).
</p>

<hr className="silverline" />

<h3 id="MessageCountLimit">MessageCountLimit <em>DWORD</em></h3>
<p>
By default, Vypress Auvis stores only the last 100 incoming messages. This key 
allows you to set a different number for saving incoming messages to memory. It 
is not recommended that you change this value without critical need, because it 
can negatively affect overall program performance.
</p>

<h3 id="UsingFilesToStoreMessages">UsingFilesToStoreMessages <em>DWORD</em></h3>
<p>
	If this value is set to 1, Auvis stores all messages in the files on the disk 
	and automatically loads it at startup. Set this value to 0 to disable this 
	feature. Default value is 1.
</p>

<h3 id="BlinkTrayIcon">BlinkTrayIcon <em>DWORD</em></h3>
<img src="/images/one_way_messenger/kb/tray-icon.gif" width="156" height="27" className="floatimg" alt="Auvis tray icon" />
<p>
	By default, the Vypress Auvis tray icon blinks when new messages arrive. 
	However, you can switch this behavior off by setting this value to 0. By 
	default, this value is missing and is assumed to be equal to 1.
</p>

<h3 id="DisableCloseProgram">DisableCloseProgram <em>DWORD</em></h3>
<img src="/images/one_way_messenger/kb/close.jpg" width="153" height="84" className="floatimg" alt="" />
<p>
	Set this value to 1, 2 or 3 to prevent the program from closing. If this value 
	is 1, then <b>Close ([X])</b> button will work as the <b>Minimize ([_])</b> button. 
	If this value is 2 the Close button will be completely disabled (see picture). 
	If this value is 3 then Auvis completely hide itself from Windows 95/98 
	Ctrl+Alt+Del Task Manager and can&rsquo;t be closed in any way. Default value is 0.<br />
</p>

<h3 id="FixedPlacement">FixedPlacement <em>DWORD</em></h3>
<p>
	If this value is set to 1, the Vypress Auvis window will have a fixed onscreen 
	size and position. Users will not be able to move Auvis&rsquo;s window across their 
	desktop or resize, minimize or maximize it. The one thing users will still be 
	able to do is click the <b>OK</b> button to minimize the window. In this mode, 
	Vypress Auvis reads size and position settings from <code>Vypress\Auvis\Initialization</code>. 
	We recommend that you first position Auvis&rsquo; window and then write the 
	appropriate data for these values. Default value is 0.
</p>

<hr className="silverline" />

<h3 id="LogFile">LogFile <em>String</em></h3>
<p>
	Specifies the path and filename for logging all incoming messages. If this 
	value is empty, logging is disabled. By default, this value is empty.
</p>

<h3 id="KeyFileName">KeyFileName <em>String</em></h3>
<p>
	The path and filename of the license(s) file for Vypress Auvis. You will 
	receive a special license file after purchasing Vypress Auvis and it will 
	unlock all program features.
</p>
<p>
	By default, Vypress Auvis looks for the license file in its startup folder, but 
	you can override this behavior using this registry value. This is useful for 
	the server-based licenses distribution method.<br />
	By default, Auvis tries to use the first *.key file from the installation 
	folder.
</p>

<hr className="silverline" />

<h3 id="MulticastGroups">MulticastGroups <em>String</em></h3>
<p>
	List of the IP-Multicast groups IP-address to join. An IP-Multicast address is 
	an address in the range of 224.0.0.0&mdash;239.255.255.255. Use semicolons (;) to 
	separate entries.
</p>

<h3 id="DisableUDPThread">DisableUDPThread <em>DWORD</em></h3>
<p>
	If this value is 1, Auvis can&rsquo;t receive messages via UDP (from Vypress 
	Messenger). Disabling the UDP thread also prevents Auvis from receiving UDP 
	Broadcasting. We strongly <b>RECOMMEND AGAINST CHANGE</b>. Default value is 0.
</p>

<h3 id="DisableTCPThread">DisableTCPThread <em>DWORD</em></h3>
<p>
	Like the previous value but affects TCP messages.
</p>

<h3 id="DisableSMBThread">DisableSMBThread <em>DWORD</em></h3>
<p>
	Like the previous value but affects SMB messages (from WinPopup/Windows NT 
	Messenger/Novell NetWare).
</p>

<h3 id="TCPPort">TCPPort <em>DWORD</em></h3>
<p>
	In this value you can setup the TCP Port for Vypress Auvis.<br />
	Default value is 7777.
</p>

<h3 id="UDPPort">UDPPort <em>DWORD</em></h3>
<p>
	In this value you can specify the UDP Port for Vypress Auvis.<br />
	Default value is 7777.
</p>
</>;
