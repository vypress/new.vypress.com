import {Helmet} from 'react-helmet';
import React from 'react';

export default props =><div className='pageContent'>
<Helmet>
<script type="text/javascript" src="/scripts/buy/prices.js"></script>
<script type="text/javascript" src="/scripts/buy/online.js"></script>
</Helmet>

<h2>Instant Secure Online Purchasing</h2>
<img className="floatimg" src="/images/buy/cards-accepted-horiz.gif" />
<p>This is the fastest and easiest way to order VyPRESS products. Your credit card
	information is sent directly to the credit card processor in a highly secure manner.
	We protect you by ensuring that nobody but you and the automated credit card processor
	will see your credit card information.</p>
<p>We use a global e-commerce platform provided by <a target="_blank" href="http://www.shareit.com">"ShareIt! A Digital River Company"</a> for selling our software products on the Internet.
	You can go directly to the secure order page:</p>

<form action="https://secure.shareit.com/shareit/checkout.html" id="OrderForm" >
<table style={{border:'dotted 2px #00b603', width:'90%'}} cellspacing="3" cellpadding="3" align="center">
	<tr>
		<td nowrap className="onlineStepTxt">
			<img alt="1" src="/images/pix/green-1.gif" className="onlineStepImg" />
			Choose a product:</td>
		<td>
			<select id="ProductsDropDownList">
				<option value="none" selected="selected">Select a product</option>
				<option value="VM">Vypress Messenger</option>
				<option value="VC">Vypress Chat</option>
				<option value="VA">Vypress Auvis</option>
				{/*<option value="VT">Vypress Tonecast</option>*/}
				<option value="WM">WinMessenger</option>
				<option value="SK">SafeKuvert</option>
			</select>
			<br/>
			<input type="hidden" name="productid" id="productid" value="0" />
			<span id="ProductRequiredFieldValidator" className="priceRedText"><b>Please select a product to order</b></span>
		</td>
	</tr>
	<tr>
		<td nowrap className="onlineStepTxt">
			<img alt="2" src="/images/pix/green-2.gif" className="onlineStepImg" />
			Enter quantity:
		</td>
		<td>
			<input type="text" id="license" name="license" maxlength="4" autocomplete="off" />
			<select id="TonecastQty">
				<option value="50" selected="selected">Up to 50 listeners</option>
				<option value="100">Up to 100 listeners</option>
				<option value="250">Up to 250 listeners</option>
				<option value="-1">Unlimited</option>
			</select>
			<br/>
			<span id="QtyRequiredFieldValidator" className="priceRedText"><b>Please enter a quantity</b></span>
			<span id="QtyCompareValidator" className="priceRedText"><b>Please enter a valid number of licenses</b></span>
		</td>
	</tr>
	<tr>
		<td></td>
		<td nowrap id="UnlimNote">
			<i>(NOTE: Enter '-1' for unlimited license)</i>
		</td>
	</tr>
	<tr>
		<td nowrap className="onlineStepTxt" colspan="2">
			<img alt="3" src="/images/pix/green-3.gif" className="onlineStepImg" />
			Adjust form settings:
		</td>
	</tr>
	<tr>
		<td style={{fontSize:'x-small', textAlign:'right'}}>Language:</td>
		<td>
			<select id="languageid" name="languageid" style={{fontSize:'x-small'}}>
				<option value="1" selected="selected">English</option>
				<option value="2">German</option>
				<option value="3">Portuguese</option>
				<option value="4">Spanish</option>
				<option value="5">Italian</option>
				<option value="6">French</option>
			</select>
		</td>
	</tr>
	<tr>
		<td style={{fontSize:'x-small', textAlign:'right'}}>Currency:</td>
		<td>
			<select id="currencies" name="currencies" style={{fontSize:'x-small'}}>
				<option value="all">all&nbsp;&nbsp;&nbsp;All currencies</option>
				<option value="USD">USD&nbsp;&nbsp;US Dollar</option>
				<option value="EUR">EUR&nbsp;&nbsp;Euro</option>
				<option value="GBP">GBP&nbsp;&nbsp;Pound Sterling</option>
				<option value="ARS">ARS&nbsp;&nbsp;Argentine Peso</option>
				<option value="AUD">AUD&nbsp;&nbsp;Australian Dollar</option>
				<option value="BRL">BRL&nbsp;&nbsp;Brazilian Real</option>
				<option value="CAD">CAD&nbsp;&nbsp;Canadian Dollar</option>
				<option value="CNY">CNY&nbsp;&nbsp;Chinese Yuan Renminbi</option>
				<option value="HKD">HKD&nbsp;&nbsp;Hong Kong Dollar</option>
				<option value="INR">INR&nbsp;&nbsp;Indian Rupee</option>
				<option value="JPY">JPY&nbsp;&nbsp;Japanese Yen</option>
				<option value="NZD">NZD&nbsp;&nbsp;New Zealand Dollar</option>
				<option value="NOK">NOK&nbsp;&nbsp;Norwegian Kroner</option>
				<option value="SGD">SGD&nbsp;&nbsp;Singapore Dollar</option>
				<option value="KRW">KRW&nbsp;&nbsp;South-Korean Won</option>
				<option value="SEK">SEK&nbsp;&nbsp;Swedish Krona</option>
				<option value="CHF">CHF&nbsp;&nbsp;Swiss Franc</option>
				<option value="TWD">TWD&nbsp;&nbsp;Taiwan Dollar</option>
			</select>
		</td>
	</tr>
	<tr>
		<td valign="middle" align="center" colspan="2">
		<input type="image" src="/images/design/btns/btn-checkout.gif" alt="Click to proceed to checkout" height="30px" width="100px" />
		</td>
	</tr>
</table>
</form>
{/*pageContent*/}
</div>
