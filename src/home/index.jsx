import {Helmet} from 'react-helmet';
import ProdEssentials from '../components/ProdEssentials';
import React from 'react';

export default props => {
return <>
<Helmet>
    <title>VyPRESS Research: Instant messaging software for LANs and business Intranets</title>
    <link rel='stylesheet' href='/css/standard.css' />
    <link rel='stylesheet' href='/css/hp.css' />
</Helmet>

<div id='hpFirstRow'>
<h2>Real-time messaging for real-time business&trade;</h2>
<h1 style={{backgroundImage: 'url(/images/texts/welcome.gif'}}>Welcome to vypress.com!</h1>
<p>
VyPRESS Research is a developer of instant messaging and alerting software for local area networks and business intranets. 
We have been developing software for this market since 1997 and take great pride in our achievements and rapid growth. 
</p>

<div className='ButtonsRow'><div>
<ul>
<li><a href='/company'>about our company</a></li>
<li><a href='http://forum.vypress.com/'>community forum</a></li>
<li><a href='/start'>news</a></li>
</ul>
</div></div>
{/* First Row */}
</div>

<div id='ProductsRow'>
{/* first column */}
<div className='leftColumn'>

{/* Vypress Chat START */}
<div className='productIntro'>
<img className='productLogo' src='/images/hp/vc-logo.gif' alt='Vypress Chat' />
<h1 style={{backgroundImage: 'url(/images/design/vc/chat-title.gif'}}>Vypress Chat</h1>

<div className='prodBody'>

<ProdEssentials Product='chat'/>
<h4>Vypress Chat is designed for office and home networks.</h4>
<p>After several years of experience working in the intranet instant messaging market, we discovered that many office and home networks operate without centralized administration. We made Vypress Chat especially for these networks. It is fully self-configurable, works with <abbr title='Transmission Control Protocol / Internet Protocol'>TCP/IP</abbr> network protocol and doesn&rsquo;t depend on a dedicated server.</p>
<p>
Vypress Chat requires no post-setup steps to operate and immediately offers an online user list (list of people who have Vypress Chat running in your office network) as well as their availability status (<cite>&ldquo;I&rsquo;m busy&rdquo;</cite>, <cite>&ldquo;Out of office&rdquo;</cite>, <cite>&ldquo;On the call&rdquo;</cite>, etc).
</p>
<p>
All conversations can be logged into a <abbr title='eXtensible Markup Language'>XML</abbr> file and easily integrated into the business workflow.
</p>
<p>
With Vypress Chat no data can be sent outside of your office network, so, it is completely confidential.
</p>
<p>Vypress Chat is a flexible, integrated solution expressly designed for fast, trouble-free installation and operation.</p>
</div>

<div className='ButtonsRow'><div>
<ul>
<li><a href='/lan_chat/screenshots/'>screenshots</a></li>
<li><a href='/lan_chat/'>more info&hellip;</a></li>
</ul>
</div></div>

</div>
{/* Vypress Chat END */}

{/* Chat Terminal START */}
<div className='productIntro pInoVyp'>
<h1 style={{backgroundImage: 'url(/images/headers/chatterm.jpg'}}>Chat Terminal</h1>
<div className='prodBody'>

<ProdEssentials Product='chatterm' Free={true} />
<h4>Chat Terminal is <a href='free_chat'>free chat</a> software for local area networks that is compatible with the Vypress Chat. It works on  Windows, Linux, and Mac OS X platforms.</h4>
<p>This <a href='free_chat'>command line tool</a> without rich user interface may be very useful for local area network administrators, developers who make the Vypress Chat compatible software, or for experienced users who is interested in more complicated usages of chat software.</p>
<p>Chat Terminal is Open Source project so anyone can modify it according his requirements.</p>
</div>

<div className='ButtonsRow'><div>
<ul>
<li><a href='/free_chat/screenshots/'>screenshots</a></li>
<li><a href='/free_chat/'>more info&hellip;</a></li>
</ul>
</div></div>

</div>
{/* Chat Terminal END */}

{/* SafeKuvert START */}
<div className='productIntro pInoVyp'>
<h1 style={{backgroundImage: 'url(/images/headers/safekuvert.jpg'}}>SafeKuvert</h1>
<div className='prodBody'>

<ProdEssentials Product='v_safekuvert'/>
<h4>SafeKuvert is a computer application that provides the user with the ability to <a href='http://www.safekuvert.com'>encrypt, digitally sign, compress, and/or securely delete files</a> from the hard disk.</h4>
<p>The encrypted files can be decrypted only on the computer where the 
						private key of a certificate of encryption was saved, but a private key of a 
						recipient's certificate is not required in order to create an encoded file. The 
						<a href='http://www.safekuvert.com'>digital signatures</a> can be verified on any computer where SafeKuvert is 
						installed. The files can also be compressed before encoding is applied. 
						Algorithms of <a href='http://www.safekuvert.com'>asymmetrical encryption</a> (RSA) ensure that data cannot be accessed 
						even if the hardware in which an encoded file was stored is lost, or if the 
						file is transferred through public, unsecured computer networks. The 
						application actively uses the <a href='http://www.safekuvert.com'>Public Key Infrastructure</a> (PKI), which is built 
						into Windows, as well as the standard <a href='http://www.safekuvert.com'>X-509 certificates</a> and the Windows Shell 
						extensions, which makes using the program very easy and convenient.</p>
</div>

<div className='ButtonsRow'><div>
<ul>
<li><a href='http://www.safekuvert.com/screens.php'>screenshots</a></li>
<li><a href='http://www.safekuvert.com/'>more info&hellip;</a></li>
</ul>
</div></div>

</div>
{/* SafeKuvert END */}
{/* First products column */}
</div>

{/* second column */}
<div className='rightColumn'>

{/* Vypress Messenger START */}
<div className='productIntro'>
<img className='productLogo' src='/images/hp/vm-logo.gif' alt='Vypress Messenger' />
<h1 style={{backgroundImage: 'url(/images/design/vm/messenger-title.gif'}}>Vypress Messenger</h1>

<div className='prodBody'>

<ProdEssentials Product='messenger'/>

<h4>Vypress Messenger is a program for <a href='lan_instant_messenger'>sending text messages with attachments</a> in real-time, without using any additional servers, from one computer to another or a few others.</h4>
<p>
The program supports several messages transferring protocols, including its own protocol, for guaranteed distribution of direct messages, using a <abbr title='Transmission Control Protocol'>TCP</abbr> protocol and a multiple-address file distribution, using <abbr title='User Datagram Protocol'>UDP</abbr> and <a href='lan_instant_messenger'>IP Multicast</a>. Besides this, the program supports a standard <abbr title='Server Message Block'>SMB</abbr> protocol (for compatibility with WinPopup, &lsquo;net send&rsquo; and Unix-realizations of Samba).
</p>
<p>
The main benefit of the program is its fault-tolerance and independency from the network infrastructure. Vypress Messenger has been originally developed and specially optimized for <abbr title='Local Area Network'>LAN</abbr>. It doesn&rsquo;t use staging servers, and that way the user can send and receive a message even if all of the company&rsquo;s servers are out of service due to some breakdown or an external attack.
</p>
<p>For special circumstances, the program provides the ability of sending high-priority messages and creating macros for sending out preset messages with a single mouse click.
</p>
</div>

<div className='ButtonsRow'>
<div>
<ul>
<li><a href='/lan_instant_messenger/screenshots/'>screenshots</a></li>
<li><a href='/lan_instant_messenger/'>more info&hellip;</a></li>
</ul>
</div>

</div>
{/* Vypress Messenger END */}
</div>

{/* Vypress Auvis START */}
<div className='productIntro'>
<img className='productLogo' src='/images/hp/va-logo.gif' alt='Vypress Auvis' />
<h1 style={{backgroundImage: 'url(/images/design/va/auvis-title.gif'}}>Vypress Auvis</h1>

<div className='prodBody'>

<ProdEssentials Product='auvis' />

<h4>Vypress Auvis offers <a href='one_way_messenger'>&ldquo;receive only&rdquo;</a> messaging capabilities.</h4>
<p>Vypress Auvis brings you focused solution to your <a href='one_way_messenger'>one-way messaging</a>, emergency notification, popup alerting and critical broadcasting needs.</p>
<p>Users can <a href='one_way_messenger'>receive messages</a> from a variety of sources, including Vypress Messenger, WinPopup, OS/2 Messenger and any other <abbr title='Server Message Block protocol'>SMB</abbr>-compatible messaging service. The primary purpose of Vypress Auvis is to offer network administrators the ability to control all aspects of the end-user interface. The administrator can hide all settings, disable closing of the program, define allowable message sources and more.</p>
<p>Auvis is an incredibly easy-to-use, lightweight application that operates on only 450 KB of <abbr title='Random Access Memory'>RAM</abbr>. Designed for use in large to very large corporate networks, Vypress Auvis offers fast deployment features and keeps the total cost of ownership at the lowest possible level.</p>
</div>

<div className='ButtonsRow'>
<div>
<ul>
<li><a href='/one_way_messenger/screenshots/'>screenshots</a></li>
<li><a href='/one_way_messenger/'>more info&hellip;</a></li>
</ul>
</div>

</div>
{/* Vypress Auvis END */}
</div>

{/* WinMessenger START */}
<div className='productIntro pInoVyp'>
<h1 style={{backgroundImage: 'url(/images/headers/winmessenger.gif'}}>WinMessenger</h1>
<div className='prodBody'>

<ProdEssentials Product='winmessenger' />
<h4>WinMessenger is an easy to use program that allows you to <a href='http://www.winmessenger.com/eng'>send and receive messages</a> from computer to computer in real-time without using dedicated servers.</h4>
<p>It works over any network protocol, it is easy to deploy and it does not require computer knowledge or special configuration. Simply put, it is standard WinPopup without the blemishes. WinMessenger offers complete implementation of the <abbr title='Server Message Block'>SMB</abbr> protocol, so with it you can do everything you can with <a href='http://www.winmessenger.com/eng'>WinPopup</a>. For example, you can send a message to a Novell user, receive messages from Linux systems, send and receive messages to/from Windows NT servers and so on.
</p>
<p>
WinMessenger works exceptionally well under all existing implementations of Windows without any updates or upgrades required &mdash; from the original release of Windows 95 to the latest Windows&nbsp;XP/2003.
</p>
<p>The program can be used on Windows 2000 Server or Server 2003 with <a href='http://www.winmessenger.com/eng'>Terminal Service</a> enabled.</p>
</div>

<div className='ButtonsRow'><div>
<ul>
<li><a href='http://www.winmessenger.com/screenshots.html'>screenshots</a></li>
<li><a href='http://www.winmessenger.com/'>more info&hellip;</a></li>
</ul>
</div></div>
{/* WinMessenger END */}
</div>

{/* Second products column */}
</div>

{/* Products Row */}
</div>

{/* Bottom line: counters */}
<div id='hpBottomLine'>
<div id='blTL'></div>
<div id='blTR'></div>
<div id='blContent'>
<h1>We offers lan instant messenger and WinPopup / 'net send' replacements</h1>
</div>
</div>
{/* END Bottom line */}
</>
}

