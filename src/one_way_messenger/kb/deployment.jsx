import {Helmet} from "react-helmet";
import React from 'react';

export default props => <>

<Helmet>
<title>INFO: Easier Deployment and Administering with Vypress Auvis.</title>
</Helmet>


<h2>Easier Deployment and Administering with Vypress&nbsp;Auvis</h2>

<img src="/images/one_way_messenger/kb/auvis_deployment.gif" width="239" height="177" className="floatimg" alt="" />

<p>
	Although Vypress Auvis comes with many important new features 
	(such us the ability to receive files from <a href="/products/messenger/">Vypress 
		Messenger</a> and an improved user interface), most changes in 
	Auvis were developed to make deployment and administration of Auvis 
	easier than ever while lowering the Total Cost of Ownership (TCO) of our 
	product. This Web page highlights a few of the changes we made to achieve this 
	important goal.
</p>
<h3 id="license_management">Simplified License Management</h3>
<p>
	Vypress Auvis requires only 
	one KEY file for an entire network. This license key file can be copied on 
	every workstation or it can be used exclusively from a shared read-only 
	location. These measures dramatically simplify license management when compared 
	to previous versions of Auvis (where each computer required an individual 
	KEY-file or a shared location with write access rights).
</p>

<h3 id="registry_settings">Multi-level Registry Support</h3>
<p>
	Previous versions of Vypress Auvis read settings exclusively from the current 
	users registry hive (HKEY_CURRENT_USER). To simplify registry settings 
	management and improve flexibility of program configuration, we introduced 
	multi-level registry settings in version 2.0. Now Vypress Auvis first loads 
	machine-dependent settings from HKEY_LOCAL_MACHINE, then it loads current users 
	settings (from HKEY_CURRENT_USER, if it exists), then the override global 
	computer setting with individual user settings and, at last, it loads current 
	users policy registry settings from HKEY_CURRENT_USER\Software\Policies key. 
	This makes it easier to manage multi-user computers (no longer is there a 
	requirement to customize each user on each computer) and restrict access to 
	partial registry settings in Windows (where you can deny access to a 
	specified registry key or keys).
</p>

</>;
