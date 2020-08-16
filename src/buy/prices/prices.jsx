import {Helmet} from 'react-helmet';
import React from 'react';

export default props =><div className='pageContent'>
<Helmet>
<title>How to buy VyPRESS's products</title>
</Helmet>

<h2>Prices and Quantity Discounts. Power in Numbers.</h2>
<p>Our products are licensing on per &quot;running copy&quot; basis, not per network, per site or per company (except an unlimited license that is per company).
If you are interested in an unlimited license, please contact our sales staff: <a href = "mailto:sales@vypress.com">sales@vypress.com</a></p>

<table width="100%" border="0" cellpadding="3">
	<tr className="priceTableHeader">
		<th rowspan="2">
			Number of licenses
		</th>
		<th colspan="4">
			Product price per running copy
		</th>
	</tr>
	<tr className="priceTableHeader">
		<th>
			<img className="priceLogoIco" src="/images/icons/vm-ico.gif" alt="messenger" />
			Messenger
		</th>
		<th>
			<img className="priceLogoIco" src="/images/icons/va-ico.gif" alt="auvis" />
			Auvis
		</th>
		<th>
			<img className="priceLogoIco" src="/images/icons/vc-ico.gif" alt="chat" />
			Chat
		</th>
	</tr>
	<tr>
		<td>
			From 1 to 49
		</td>
		<td>
			$19.90 US
		</td>
		<td>
			$9.00 US
		</td>
		<td>
			$19.00 US
		</td>
	</tr>
	<tr bgcolor="#D9EBFF">
		<td>
			From 50 to 99
		</td>
		<td>
			$14.00 US
		</td>
		<td>
			$6.00 US
		</td>
		<td>
			$12.00 US
		</td>
	</tr>
	<tr>
		<td>
			From 100 to 999
		</td>
		<td>
			$9.50 US
		</td>
		<td>
			$4.50 US
		</td>
		<td>
			$8.00 US
		</td>
	</tr>
	<tr bgcolor="#D9EBFF">
		<td>
			Over 1000
		</td>
		<td>
			$4.90 US
		</td>
		<td>
			$2.20 US
		</td>
		<td rowspan="2">
			<b>$1900.00<br/></b>
			<i className="priceSmallText">(Unlimited)</i>
		</td>
	</tr>
	<tr>
		<td>
			<b>Unlimited</b>
		</td>
		<td>
			<b><a href="./prices/messenger_unlimited">$8000.00<sup>*</sup></a></b>
		</td>
		<td>
			<b>$6000.00</b>
		</td>
	</tr>
	<tr>
		<td height="8px" colspan="5" bgcolor="#0056B5">
		</td>
	</tr>
</table>
<p>
<sup>*</sup>Includes an unlimited license for Vypress Auvis software.<br/>
</p>
{/*pageContent*/}
</div>