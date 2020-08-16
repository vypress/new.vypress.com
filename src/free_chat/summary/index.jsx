import QuickInfo from '../../components/QuickInfo';
import React from 'react';
import products from '../../products.js';

export default props =><>
<h2>What is Chat Terminal</h2>

<a href="screenshots" id="roundSshot"><img src="/images/free_chat/chat2term.gif" alt="Click to see Chat Terminal screenshots" width="220" height="170" /></a>

<p>
Chat Terminal is free chat software for Windows, Linux, Mac OS X, and other UNIX like OSes, that is compatible with our <a href = '../lan_chat/'>LAN chat software</a> - Vypress Chat. It is open source free software that is redistributable under the GNU version 3 General Public License.
</p>

<QuickInfo Product={products.find(p=>p.id=='chatterm')}/>

<h3>Command line application</h3>
<p>
Chat Terminal is a command line tool without rich user interface may be very useful for local area network administrators, developers who make the Vypress Chat compatible software, or for experienced users who is interested in more complicated usages of chat software.
The application supports several command line parameters and command line input/output redirection.
It can be easily built in to any administrative scripts or called from other applications
</p>

<h3>Fully Unicode compliant</h3>
<p>
Chat Terminal comes as a compliant Unicode application. This means that there are no problems with mixed language texts and multi-byte characters.
</p>

<h3>64-bit and 32-bit versions</h3>
<p>Chat Terminal is a true 64-bit application that takes every advantage of modern 64-bit software. There is also 32-bit Chat Terminal that works on 32-bits processors.
</p>

<h3>XML support</h3>
<p>
Chat Terminal stores all configuration settings in standard XML files that are checked for an XML schema validity before loading.
</p>

</>