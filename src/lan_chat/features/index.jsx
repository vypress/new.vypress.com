import {Helmet} from 'react-helmet';
import React from 'react';

export default props => <>
<Helmet>
<title>Comprehensive list of Vypress Chat features</title>
</Helmet>

<h2>Some of the main features of Vypress Chat:</h2>

<ul className="featlist">
	<li>
		<strong>Vypress Chat <nobr>is real-time chat</nobr> software for 
			easy conversations between several people</strong> in virtual chat rooms 
			(channels). <nobr>Built-in instant messaging</nobr>, files transfer and private chats are also 
			included.
	</li>
	<li>
		<strong>Clean, straightforward user interface, oriented for novice users 
			and <nobr>easy-to-understand</nobr> for advanced chat users.</strong> Users can 
			work with Vypress Chat immediately after installation. There is no need to 
			make configuration changes or enter any information about your network. 
			Advanced users can easily find all they want within the chat software.
	</li>
	<li>
		<strong>Easy to use, full featured bulletin board</strong>
		<img src="/images/lan_chat/bb.png" alt="Vypres Chat Bulleting Board Screenshot" className="floatimg" />
		<p>Vypress Chat includes powerful, fully packed but easy to use bulletin board. It allows every user to post important news, pictures and drawings and other durable information that will be immediately available to all other Chat users on your network. Now you may save money and desktop space from traditional yellow stickers and centralize all workflow news in one handy place.
		</p>
		<p>Bulletins may include <b style={{fontSize: 'larger', color: 'red'}}>rich</b> <i style={{fontFamily:'serif', fontSize: 'larger', color:'blue'}}>text</i> <span style={{textDecoration: 'underline', color: 'Fuchsia'}}>formatting</span> (font faces, color, size, bold, underline, etc.), images, hyperlinks and expiration time. All these backed with magic smart, bandwidth-friendly background replication and RSA-based secure digital signature!</p>
	</li>
	<li>
		<strong>Handy presence and &ldquo;out of office&rdquo; indication</strong> 
		<img src="/images/lan_chat/typing.png" alt="User ismap typing" className="floatimg" />Users can see all other users in 
			their network who have Vypress Chat running. Four user statuses are 
			listed: <i>Available, DND, Away,</i> and <i>Offline</i>. Vypress Chat 
			automatically tracks user activity and switches into &ldquo;Away&rdquo; mode 
			after a specified period of inactivity or when a screen saver starts and display specified auto response message.
			<br />
			Since version 2.0, Vypress Chat also shows neat &ldquo;User is typing&hellip;&rdquo; indicator in user-to-user message window.
	</li>

	<li>
		<strong>No Internet connection and no server required!</strong> Incredible, but the feature-packed Vypress Chat does not require a dedicated server or any sort of Internet connection! So, you may start saving money and enforce your office security just by cutting Internet-based messengers from your office network and moving to this Chat.<br />
Vypress Chat optimized for local networks and uses all advantages of such target: with well-toughed hybrid architecture that combining IP Multicast and direct <abbr title="Transmission Control Protocol">TCP</abbr> connections our software offers reliable, fast and fail safe private instant messaging and chatting solution for business needs. DHCP-based, peer-to-peer Windows AutoNetworking, <acronym title="Internet Protocol, version 6">IPv6</acronym> &mdash; every type of networks is supported automatically!
	</li>
	<li>
		<strong>Public channels, private chats, instant messaging and files transfer are 
			available.</strong> Vypress Chat offers integrated services for supporting <nobr>
			network-wide</nobr> conversations. All users can join existing public 
			channels, create new channels, start private, <nobr>person-to-person chats</nobr>, 
			and send messages to several other users at once. In addition, <abbr title="HyperText Transfer Protocol">HTTP</abbr> files sharing and a &ldquo;sound requests&rdquo; feature.
	</li>
	<li><strong>Completely secure, private and authoritative collaboration</strong>
	Behind of user friendly and intuitive interface, Vypress Chat strengthen with modern, proven, industry standard data encryption and digital signatures. All Vypress Chat network packets are signed with RSA-based digital signatures to ensure authoritative source for all chats. Since version 2.0, peer-to-peer messages transferring over a network encrypted in the way similar to one that safe Internet servers use (<abbr title="Secure Sockets Layer">SSL</abbr> or <abbr title="Transport Level Security">TLS</abbr>). Finishing with local network restricted working area to establish fully secure and trustworthy electronic communications solution. 
	</li>
	<li>
		<strong>Full-featured logging and archiving.</strong> Vypress Chat can 
			automatically save any (or all) channels and private messages into a journal file, keeping logs of 
			private chats and incoming/outgoing messages. These features allow you to 
			discuss actual business topics without fear of forgetting important subjects of 
			conversation. Vypress Chat uses standard, easy to syndicate <abbr title="eXtensible Markup Language">XML</abbr> format for journal files. So, if your company rules or industry regulations directing you to store all electronic communication you may easily integrate Chat journals into any sort of archiving or workflow system with standard <abbr title="eXtensible Markup Language">XML</abbr>-technologies, such as Microsoft BizTalk&reg; or <abbr title="Extensible Stylesheet Language Transformations">XSLT</abbr>.
	</li>
	<li><strong>Graphical emoticons.</strong><div className="floatimg"><img src="/images/products/smiles/red_smile.gif" alt="" width="19" height="19" /><img src="/images/products/smiles/regular_smile.gif" alt="" width="19" height="19" /><img src="/images/products/smiles/rose.gif" alt="" width="19" height="19" /><img src="/images/products/smiles/thumbs_up.gif" alt="(Y)" width="19" height="19" /></div> Sometimes, one image costs thousands words, so we&rsquo;ve added nice looking graphical emoticons (<em>smiles</em>) for easier spirits sharing and digital wellness spreading across your company.</li>
	<li>
		<strong>Easy deployment and support.</strong> Again, Vypress Chat 
			does not require any special configuration. Users can begin using 
			Vypress Chat immediately after installation. The setup utility 
			automatically chooses the best available protocol and configures the software 
			for you (silent setup mode also available). If you have any questions, VyPRESS 
			Support Team Engineers are happy to help you in a timely manner, so you never 
			will be left alone if troubleshooting issues arise.
	</li>
</ul>

</>
