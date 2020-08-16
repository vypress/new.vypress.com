import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>
<Helmet>
<title>HOW-TO: Shared Users Group in Vypress Messenger's Address Book</title>
</Helmet>

<h2>Shared Users Group in Vypress&nbsp;Messenger's Address&nbsp;Book</h2>
<p>
One of the new features in Vypress Messenger 2.8 is <b>Shared Users Group Mapping</b>. After previous versions of Vypress Messenger were released, we received several requests like the following:<br/>
<img src="/images/lan_instant_messenger/kb/map-group.gif" width='120' height='81' hspace='5' vspace='5' border='0' align="right" alt="Map Network Group button"/>
<cite>
We are a global company looking to implement a pop up messaging system. I have
downloaded a trial version of Messenger to try out.
<br/>
I noticed there is a button in the address book called Map Network Users Group.
<br/>
Does this allow all the people using Messenger to share a network based address
book?
<br/>
How does this function work, what are the names of the files that would have to
be copied up to the server for it to work? I have not found any info regarding
this in your help files.
</cite>
</p>
<p>
The information below answers those issues and fills in the blanks in the documentation. 
</p>
<h4>Introduction</h4>
<p>
The Shared Users Group Mapping feature was designed to help Network Administrators <b>keep common parts of the Address Book synchronized and available to all computers on the network</b>. It allows the administrator to create an Address Book group once and then share it with all other VM (Vypress Messenger) users across the corporate network. You can store your Address Book group on a separate network path that you specify, and not allow the users on your network to modify this Address Book group. 
</p>
<h4>Getting started</h4>
<p>
The following steps briefly explain how to use the <b>Map Network Users Group</b> feature:</p>
<ol>
<li>First create the address group (or groups) that you want to make common for all users. Vypress Messenger can share only groups, not individual addresses.</li>

<li>Use the <b>&quot;AddressBook Maintenance.exe&quot;</b> utility, which can be found in the folder where Vypress Messenger is installed. This will export the shared group onto any network location (typically a shared folder on your server).</li>

<li>Now, open the VM Address Book on a different computer in your network, then press the <b>Map network users group...</b> button. Browse the &quot;Network Neighborhood&quot; and select the shared folder containing the group you exported in step 2. The folder will appear in the Address Book as a generic group icon with an overlaid curved arrow <img src="/images/lan_instant_messenger/kb/shared-group-ico.gif" width='16' height='16' border='0' align="bottom" alt=""/> (like file system shortcuts in Windows).</li>

<li>Repeat step 3 on all the computers in your network. Now all users can share one or more common address groups. Only the administrator can change information in shared groups. Users cannot change information in these groups. Repeat steps 1-3 to map more than one group.</li>
</ol>

<h4>Afterword</h4>
<p>
This network sharing technique is incredibly flexible and tremendously effective within virtually any network environment. However, for maximum flexibility, Vypress Messenger has another, more complex method to utilize network Address Books. We describe this other method in this Support Team document: <b><a href="regkeys#AddressBookPath">TIP: The secret registry keys of Vypress Messenger</a></b>. Please read this page and use this technique if the standard method is not acceptable for your corporate environment. Happy sharing!
</p>
</>