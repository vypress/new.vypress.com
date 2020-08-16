import { Helmet } from 'react-helmet';
import React from 'react';

export default props => <>
    <Helmet>
        <title>Gate Gourmet Deployment Case Study</title>
    </Helmet>
    <h2 className="top10">Gate Gourmet Case Study</h2>
    <h4>Introduction</h4>
    <img src="/images/support/kb/gategourmet.gif" align="right" alt="Gate Gourmet" />
    <p>
        GATE GOURMET London was founded in July 1992 through a merger of the Swissair
        Company ICS (International Catering Services) and the catering operations of
        Swissair.
		</p>
    <p>
        <cite>&quot;The problem arose when the company upgraded its operations software
        package. The company provides onboard consumables such as meals, films,
        blankets to airline flights and needs a method of communicating last minute
        changes to flight requirements right up to a few minutes before departure. This
        information arrives from the airlines in real time to a central control and
        some of it has to be forwarded to various people on the network, for this
				reason a simple instant messaging system was required.&quot;</cite><br />
        <div align="right">Francis W.G.Hibbert, Consultant to Gate Gourmet London Ltd</div>
    </p>
    <h4>The Search for a Solution</h4>
    <p>Francis Hibbert:<br />
        <cite>"We evaluated a number of instant messaging software (programs) available
        on the market after having established that the WinPopup facility provided by
        MS was not adequate for the purpose.
				<br />
            <br />
				We needed a product that was:
				<ul>
                <li>
                    <p className="Bottom10">Specifically intended for network usage using an IP network (NT
							servers and NT/Win95 workstations).</p>
                </li>
                <li>
                    <p className="Bottom10">Had two distinct types of installations, a version for sending
                    messages on a few machines, and a version for only receiving messages for the
							other machines.</p>
                </li>
                <li>
                    <p className="Bottom10">(Has) the ability to use an address book (better still if it
							were possible to browse the network to detect logged on users).</p>
                </li>
                <li>
                    <p className="Bottom10">(Has) the ability to restrict user options to prevent tampering
                    with the settings. In particular instant popup on receipt of messages, and
							disabling the turning off of the program."</p>
                </li>
            </ul>
        </cite>
    </p>
    <h4>Finding the Solution through VyPRESS&nbsp;Research</h4>
    <p>Gate Gourmet opted for the VyPRESS solution because of VyPRESS' two distinct
    installation types (Vypress Messenger and Vypress Auvis). They were briefly
    tempted to settle for NetPopup, because it could detect users' machines on the
    network, but decided against it because there is only one configurable
			installation mode available for all users.</p>
    <p>
        Vypress Auvis met all the needs of Gate Gourmet to a tee. They found that
        VyPRESS software uses very little of a computer's system resources and allows
			for license streaming and concurrent usages that lower total cost.</p>
    <h4>Graceful, Easy Deployment</h4>
    <p>It was necessary to install the registry configurations of the Auvis program to
    meet Gate Gourmet's installation requirements. Specifically, the Gate Gourmet
    staff wanted to install Auvis remotely, without the need for manual
    intervention on each individual PC in the network. The software installation
    itself was done through a modification of the company's login script, although
			they could also have done it using the system configurations.</p>
    <a name="login_install"></a>
    <h5>Login script modifications</h5>
    <p>
        The initial software setup was made using minor modifications of the login
        script, which automatically checks for existing Auvis applications on the
        machine and begins the installation process if no previous versions are found.
        Here are the modifications:
		</p>
    <table width="95%" border="0" align="center">
        <tr>
            <td bgcolor="#d5eaff">
                <br />
                <blockquote><code><font size="-2" style={{fontSize: '9pt'}}> rem ******** Checking for
								existing Auvis **************<br />
								IF EXIST "C:\Program Files\Vypress Auvis\Auvis.exe" GOTO AUVIS_EXIST<br />
								rem ******** Launching Auvis setup in silent mode *****<br />
								\\server\public\distrib\Auvis16.exe /q:a<br />
								:AUVIS_EXIST<br />
								rem ******** Continues with login script ************** </font></code></blockquote>
            </td>
        </tr>
    </table>
    <h5>System policy template</h5>
    <img src="/images/support/kb/policy.gif" width="289" height="334" hspace="5" vspace="5" border="0" align="right"
        alt="" />
    <p>System administrators can use system policies to control user and computer
    configurations from a single location on a network. System policies propagate
    registry settings to a large number of machines without requiring the
			administrator to have detailed knowledge of the registry.</p>
    <p>Since the company already used the policy configurations to install at each
    login a series of registry parameters that restrict or enable various security
    configurations, it was a logical maneuver to install the Vypress Auvis registry
    settings using the same method. These settings can be configured differently
    for various user groups, so a set of settings could be created for normal
    users, licensed users, and LAN administrators. Once we obtained the Auvis .ADM
    template, it was easy to test it on the registry of one machine and then update
    the policy configuration file (config.pol) on the export replication share of
    the primary domain controller. This file update was then replicated to all the
    PDC's replication partners, which are the BDCs used for logon. The only other
    modification requirement involved creating an NT global group of licensed Auvis
    users, then defining those users that were the most important recipients of the
    messages. This group is then used in the policy configuration file to enable
			license settings for those users.</p>
    <h5>How Did Gate Gourmet Feel About the Deployment Process?</h5>

    <table cellspacing="0" cellpadding="0" border="0" width="90%" align="center" bgcolor="#e2e2e2">
        <tr><td colspan="4" height="5" bgcolor="#ffffff"><div style={{width: '1px'}}><spacer type="block" width="1" height="1" /></div></td></tr>
        <tr style={{lineHeight:'0px'}}>

            <td width="8" nowrap="" bgcolor="#ffffff" rowspan="2"><div style={{width: '8px'}}><spacer type="block" width="8" height="1" /></div></td>

            <td><img src="/images/design/cite/cite_top_left.gif" width="12" height="8" alt="" border="0" /></td>
            <td background="/images/design/cite/cite_top_bg.gif"><div style={{width: '1px', height: '8px'}}><spacer type="block" width="1" height="8" /></div></td>
            <td><img src="/images/design/cite/cite_top_right.gif" width="12" height="8" alt="" border="0" /></td>

        </tr>
        <tr>
            <td background="/images/design/cite/cite_bottom_left.gif" className="citeLeft" height="100"><div style={{width: '1px'}}><spacer type="block" width="1" height="1" /></div></td>
            <td background="/images/design/cite/cite_main_bg.gif" className="citeMiddle" width="99%">
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                        <td>
                            <div className="citeText">
                                &quot;This process worked surprisingly well.<br />
				The testing of this installation revealed some necessary corrections to the
				company's network. In particular, we found that on a number of machines the
				registry configurations were not being installed correctly. The solution was
				found in that on the WIN95 machines it is necessary to install group policies
				on each individual machine to make sure that it goes to search for the
				config.pol file on login. This is automatic for NT workstations. We also found
				that it was necessary to update the MSNET32.DLL windows file to correct a fault
				in Win95 installation that prevents the logon script from working every time
				when logging onto an NT network.&quot;
</div>
                        </td>
                    </tr>
                    <tr>
                        <td valign="bottom">
                            <div className="citeAuthor">
                                <br />
Francis W.G.Hibbert, Consultant to Gate Gourmet London Ltd
</div>
                        </td>
                    </tr>
                </table>
            </td>
            <td background="/images/design/cite/cite_bottom_right.gif" style={{backgroundPosition: 'bottom'}}><div style={{width: '1px'}}><spacer type="block" width="1" height="1" /></div></td>
        </tr>
        <tr><td colspan="4" height="5" bgcolor="#ffffff"><div style={{width: '1px'}}><spacer type="block" width="1" height="1" /></div></td></tr>
    </table>
    <h4>For More Information</h4>
    <p>
        For more information about VyPRESS Research products, write the VyPRESS Support
		Team at support@vypress.com.</p>
    <p>
        &copy; <a href="/info/legal/">2020 VyPRESS Research. All Rights Reserved. Terms of
				use.</a></p>
    <p>
        This case study is for informational purposes only. VYPRESS MAKES NO
		WARRANTIES, EXPRESS OR IMPLIED, IN THIS SUMMARY.</p>
    <p>
        VyPRESS, Vypress Messenger and Vypress Auvis are either registered trademarks
        or trademarks of VyPRESS Research in the Russian Federation and/or other
        countries. Other product and company names mentioned herein may be the
        trademarks of their respective owners.
		</p>
    <h4>VyPRESS Products Used</h4>
    <ul className="listlinks">
        <li>
            <a href="/lan_instant_messenger/">Vypress Messenger</a></li>
        <li>
            <a href="/one_way_messenger/">Vypress Auvis</a></li>
    </ul>
    <hr width="80%" color="silver" noShade SIZE="1" style={{borderBottomStyle: 'dotted'}}/>
        <p>
            This case study is for informational purposes only. VYPRESS MAKES NO
            WARRANTIES, EXPRESSED OR IMPLIED, IN THIS SUMMARY. The information contained in
            this document represents the current view of VyPRESS on the issues discussed as
			of the date of publication.</p>
</>