import {Helmet} from 'react-helmet';
import React from 'react';

export default props =><div className='pageContent'>
<Helmet>
<title>Buy VyPRESS product with Purchase Order, by fax or mail</title>
</Helmet>

<h2>Customer Care Center</h2>

<p>All of our payments are handled by Element 5 AG Company (Germany/USA). If you have ordered software and would like to review your order information, or if you have any questions about the ordering, payment, or shipping procedures, please feel free to visit the Customer Care Center at <a href="http://www.shareit.com/ccc/index.html?publisherid=11132" target="_top"><b>http://www.shareit.com/ccc/</b><img src="<%=Global.AppPath%>/img/pix/outerlink.gif" hspace="3" border="0" height="11" width="20" /></a>.</p>

<h2>Credit Cards, Switch/Solo, Wire Transfer and Checks</h2>
<p>
Payments via credit cards, Switch/Solo debit cards, bank/wire transfers,
checks and cash are integrated into our online order process.
To pay using any of these methods, just click on the <a href="../online/"><b>Buy Online</b></a> tab and
proceed with your order. You should specify the preferred payment methods on the first order page: 
</p>

<img src="/images/buy/options/payment_methods.gif" height="104" width="346" alt="Payment methods selection" className="center" />

<h2>Order by Fax</h2>

<p>If you do not want to submit your order and credit card information online, you can fax your order to ShareIt. To generate faxable order form, click <a href="../online">
<b>Buy online</b></a> and then click on the <i><u>I prefer to order by fax</u></i> link (at the bottom of the online order page): </p>

<img src="/images/buy/options/fax.gif" height="169" width="426" alt="Pay by fax" className="center" />

<h2 id="PO">Purchase Orders</h2>
<p>Companies with purchasing departments that do not use credit cards usually use Purchase Orders. We accept orders on account only from the established companies that have faxed us signed Purchase Orders on their company letterhead. We have given our customers a payment deadline of 30 days from purchase date (<b>Terms: Net30</b>). 
</p>
<p>
Please use the company letterhead when submitting a purchase order.
Include your company's mailing address, as well as a billing address.
Purchase orders need to be signed by a purchasing agent of your company.
Please provide a  name for the point of contact. Include all pertinent telephone numbers, both voice and fax.
Most importantly, please include the email address of the person you would like to have
the license information emailed to. Please include the Product ID number as well as the cost of the program.
<b>The vendor needs to be made out to ShareIt!, not VyPRESS Research, LLC</b>.
Actual ShareIt! addresses can be found <a href="http://www.shareit.com/"><b>here</b>
<img src="/images/pix/outerlink.gif" height="11" width="20" hspace="4" alt="" /></a>.
You can call ShareIt if you have any purchase-related questions. 
</p>
{/*pageContent*/}
</div>
