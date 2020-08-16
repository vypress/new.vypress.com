import {Helmet} from 'react-helmet';
import React from 'react';

export default props =><>
<Helmet>
	<meta Description = "Tutorial page of the open source chat for many Operating Systems"/>
	<meta Keywords = "tutorial, chat, terminal, command line, free chat, open source chat, LAN chat, network chat"/>
</Helmet>

<h2>Getting started with Chat Terminal</h2>

<a href="/images/free_chat/start_large.jpg" id="roundSshot"><img src="/images/free_chat/chatterm_start.gif" alt="Chat Terminal"/></a>

<p>
After the Chat Terminal starts you will see a welcome message and a command prompt <b>&gt;</b>.
The standard Chat Terminal prompts looks like <b>channel&gt;</b>. This message is an invitation to enter a command (must begin with <b>/</b> slash) or a message. It shows the name of the currently chatting channel. To enter a command, simply type it, and then press Enter to execute it.
To send a message, type it, and then press Enter. To edit a command line, use the left and right arrow keys to position within the line, and the Backspace and Delete keys to delete characters to the left or right of the cursor, respectively. To insert text, simply type it. You can press Enter with the cursor located anywhere on the line to execute the command. You can scroll through the history of previously entered commands and messages using the up and down arrow keys. This enables you to easily re-enter a command or re-send a message, either exactly as you previously entered it or after editing.
</p>

<h3>Chat Terminal commands</h3>
<p>
First commands that should to be executed after the program starts
are <b>/list</b> and <b>/join</b>.
To send a message, type it, and then press Enter.
To edit a command line, use the left and right arrow keys to position
within the line, delete characters to the left or
right of the cursor, respectively. To insert text, simply type it.
You can press Enter with the cursor located anywhere on the line to
execute the command.
You can scroll through the history of previously entered commands and
messages using the up and down arrow keys.
This enables you to easily re-enter a command or re-send a message,
either exactly as you previously entered it or after editing.
</p>

<p>List of commands:</p>
<table>
<tr><th>command</th><th>description</th></tr>
<tr><td>add</td><td>add a current channel topic</td></tr>
<tr><td>allchs, allchannels</td><td>list all channel names that are created in a network</td></tr>
<tr><td>allusers</td><td>list all users in a network</td></tr>
<tr><td>beep NICK</td><td>send a beep signal to a user with name NICK</td></tr>
<tr><td>cc CHANNEL</td><td>set a channel with name CHANNEL as a current channel</td></tr>
<tr><td>channels NICK</td><td>request a user with name NICK for list of joined channels</td></tr>
<tr><td>cls</td><td>clear the screen</td></tr>
<tr><td>echo on, echo off</td><td>display or don't display entered commands and messages on the standard output</td></tr>
<tr><td>exit, quit</td><td>quit the program, you can also use key sequence Ctrl+C to exit the program</td></tr>
<tr><td>flood NICK SECONDS</td><td>ban a user with name NICK for SECONDS seconds</td></tr>
<tr><td>help</td><td>display this information</td></tr>
<tr><td>here</td><td>refresh list of users of a current channel</td></tr>
<tr><td>here CHANNEL</td><td>refresh list of users of a channel with name CHANNEL</td></tr>
<tr><td>info NICK</td><td>request personal information about a user with name NICK</td></tr>
<tr><td>join</td><td>join to '#Main' channel</td></tr>
<tr><td>join CHANNEL</td><td>join to a channel with name CHANNEL</td></tr>
<tr><td>leave</td><td>leave a current channel</td></tr>
<tr><td>leave CHANNEL</td><td>leave a channel with name CHANNEL</td></tr>
<tr><td>list</td><td>list all users in a network</td></tr>
<tr><td>mass TEXT</td><td>send a mass message with TEXT</td></tr>
<tr><td>me</td><td>send an activity message to the current channel</td></tr>
<tr><td>msg NICK TEXT</td><td>send a mass message with TEXT to one user with name NICK</td></tr>
<tr><td>my</td><td>list channels which you are joined to</td></tr>
<tr><td>nick NICK</td><td>change your nick name to NICK</td></tr>
<tr><td>sjoin PASSWD CHANNEL&nbsp;&nbsp;</td><td>join to a secured channel CHANNEL with a password PASSWD</td></tr>
<tr><td>topic TOPIC</td><td>set current channel's topic to TOPIC</td></tr>
<tr><td>wait SECONDS</td><td>wait for SECONDS seconds</td></tr>
<tr><td>whoim</td><td>display detailed information about you</td></tr>
<tr><td>users</td><td>list users who are joined to the current channel</td></tr>
</table>

<p>In commands where two parameters are required the first parameter must be enclosed with any symbols, for example <b>/msg 'name' text</b> or <b>/sjoin /pass'\"word/ CHANNEL</b></p>

<h3>Settings</h3>
<p>
All software settings are maintained by standard XML files:
<ul>
<li><b>chatterm.xml</b> - application and network settings file. An example of such file is "example_chatterm.xml'. You can modify and rename this file if necessary. Default location of chatterm.xml is a home folder of ChatTerminal;</li>
<li><b>chatterm.user.xml</b> - user personal settings file. An example of such file is "example_chatterm.user.xml". You should to modify and rename this file to have information about you. Default location of "chatterm.user.xml" is "%USERPROFILE%/Application Data" folder. You can run ChatTerminal by command <code>ChatTerm -u chatterm.user.xml</code> to read a chatterm.user.xml file from the current folder.</li>
</ul>
All elements and attributes in the XML files have clear meaning but yet we add detailed comments about all elements and attributes in example files.
</p>

<h3>Command Line parameters</h3>
<p>You can get help about available command line switches by command <code>ChatTerm /?</code> or <code>ChatTerm --help</code>.
Command line switch -dN, where N is a number between 0-15 turns on displaying debug information: 0 - nothing, 15 as much as possible, 1 - debug received messages, 2- debug received packets (packets are printed as a Hex String), 8 - debug sent packets, all other numbers are bitwise combination of mentioned values.
</p>
<p>The syntax of ChatTerm command is:</p>
<code>
ChatTerm [options]
<table>
<tr><th align='left'>Options:</th><th></th></tr>
<tr><td>/?</td><td></td></tr>
<tr><td>/help</td><td></td></tr>
<tr><td>--help</td><td>display usage text</td></tr>
<tr><td>/c &#123;filename&#125;</td><td>path to configuration file</td></tr>
<tr><td>/d[N]</td><td>verbose level</td></tr>
<tr><td>/i &#123;filename&#125;</td><td>path to initialization script file</td></tr>
<tr><td>/u &#123;filename&#125;</td><td>path to personal user information configuration file</td></tr>
<tr><td>/v</td><td></td></tr>
<tr><td>--version</td><td>display version info</td></tr>
</table>
</code>
</>
