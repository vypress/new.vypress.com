import {Helmet} from 'react-helmet';
import QuickInfo from '../../components/QuickInfo';
import React from 'react';
import products from '../../products.js';

export default props =><>
<Helmet>
<title>Vypress Messenger: Instant messenger for LAN</title>
</Helmet>

<h2>What is Vypress Messenger</h2>

<a href="screenshots" id="roundSshot"><img src="/images/lan_instant_messenger/screenshots/round.gif" alt="Click to see Vypress Messenger screenshots" /></a>
<p>
Vypress Messenger is the first real-time messaging system specifically designed for business Intranets. Using a <span className="nw">peer-to-peer</span> architecture, it delivers text messages from workstation to workstation in real-time, without the typical delay associated with conventional e-mail, and absolutely safe with high-grade encryption and digital signatures.
</p>
<p>
It&rsquo;s a simple fact. Efficient, flexible, instantaneous communication is critical to your company&rsquo;s success. That is why we created Vypress Messenger &mdash; to offer your company instantaneous real-time messaging. Whether you&rsquo;re working with people across the hall or around the world, Vypress Messenger can help you communicate better and faster than ever before.
</p>

<QuickInfo Product={products.find(p=>p.id=='messenger')}/>

<p>
Now you can implement a new sales program for your sales force in hours instead of weeks. Or you can offer immediate, real-time assistance to network users instead of making them wait for return e-mail or a phone call.
</p>

<p><b>The bottom line? The VyPRESS product family delivers instant messaging that&rsquo;s fit for business. Your business.</b>
</p>
<p>Designed to meet the need of today&rsquo;s most demanding businesses, Vypress Messenger offers the highest level of real-world usability, ease of learning and operation, and ergonomics. We designed Vypress Messenger by observing how real business people work. As a result, we focused on simplicity, clarity, directness, and efficiency. Every feature in Vypress Messenger is engineered to address real-world business concerns.
</p>
<p>
Unlike other instant messaging products, VyPRESS Research developed Vypress Messenger with the primary goal of usability in the <acronym title="Local Area Network">LAN</acronym>, <acronym title="Wide Area Network">WAN</acronym> and Intranet environment. It is an amazingly effective tool for workgroups and corporate <acronym title="Local Area Network">LAN</acronym>s, because it offers a variety of wide-range message broadcasting and message systems for problem 
solving.
</p>
<p>
Successful companies understand the importance of real-time communication. They use VyPRESS products to obtain a strong competitive edge. These VyPRESS equipped companies range from small firms to large corporations, including HP, Fokker Aerostructures, Reuters and Agfa.
</p>
<p>
Whether yours is a start-up company or a worldwide organization, our flexible solutions are the perfect choice for your business communications!
</p>

<noscript className="setoy">
	<h2>Vypress Messenger - enterprise instant messaging software</h2>
</noscript>
</>