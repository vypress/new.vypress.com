import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>
<Helmet>
<title>HOW-TO: Examples of SEND.EXE usage</title>
</Helmet>

<h2>Examples of SEND.EXE usage</h2>

<p>
SEND.EXE is the command-line sender utility that came with Vypress Messenger and can be found in the same folder where Vypress Messenger was installed. It will not work on computers without Vypress Messenger (this is by design, because SEND.EXE can only function using Vypress Messenger's registry settings and Address Book groups). The SEND.EXE utility is one of the most advanced components of Vypress Messenger. This document presents some examples of SEND.EXE usage. 
</p>
<p align="center">
<img src="/images/lan_instant_messenger/kb/send_exe.gif" width='480' height='226' border='0' alt="SEND.EXE running at Windows console"/>
</p>
<p>
To send message to recipients use following switches:
</p>
<p>Unicast message:</p>
<blockquote><code>
Send.exe 10.10.10.1 &quot;Test message&quot;<br/>
Send.exe 10.10.10.1:7778#udp &quot;Test message&quot;
</code></blockquote>

<p>E-mail message:</p>
<blockquote><code>
Send.exe support@vypress.com &quot;Help me&quot;<br/>
Send.exe /s my.smtp.server /E my.reply.e-mail.address support@vypress.com &quot;Thanks&quot;
</code></blockquote>
<p>
Broadcast message:
</p><blockquote><code>
Send.exe 255.255.255.255#udp &quot;Test message&quot;
</code></blockquote>
<p>
Send a message to Vypress Messenger's group, 'My Group':
</p><blockquote><code>
Send.exe &quot;[My Group]&quot; &quot;Test message&quot;
</code></blockquote>
<p>
Send a message to a list of addresses (use semicolon (;) to separate entries):
</p><blockquote><code>
Send.exe 10.10.10.1;10.10.10.2;10.10.10.3 &quot;Test message&quot;
</code></blockquote>
<p>
Send a message to addresses that are listed in the file 'addresses.txt' (use semicolon (;) or new line to separate entries):
</p><blockquote><code>
Send.exe /f addresses.txt &quot;Test message&quot;
</code></blockquote>
<p>
Send a message to addresses that are listed in the file 'addresses.txt,' with text placed in the file 'message.txt':
</p><blockquote><code>
Send.exe /f address.txt /f message.txt
</code></blockquote>
<p>
To get more info about the command-line switches of send.exe, use the following command:</p>
<blockquote>
<code>Send.exe /?</code>
</blockquote>
</>