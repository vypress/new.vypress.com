import ProductTabs from '../tabs';
import React from 'react';
import {byLang} from '../utils.js'

function getTabProperty(tab, property)
{
    const value = tab[property] == null && tab.global ? ProductTabs.global[tab.name][property] : tab[property];
    return byLang(value) || '';
}

export default props => {
    let tabNavigator = [];
    let altNavigator = [];

    ProductTabs[props.Section].forEach(t => {

        const activeTab = t.tab == props.SelectedTab;

        let liText = getTabProperty(t,'tabText');

        if(!liText || 0 === liText.length)
            liText = getTabProperty(t,'label');

        const imgSrc = getTabProperty(t,'tabImage');
        const imgAlt = getTabProperty(t,'alt');

        if (activeTab) {
            tabNavigator.push(<li className='active'>
                <div>{imgSrc ? <img src={imgSrc} alt={imgAlt}></img>: null}{liText}</div>
                </li>);

            altNavigator.push(<li className='active'>{liText}</li>)
        }
        else {
            tabNavigator.push(<li><a href={t.link}>{imgSrc ? <img src={imgSrc} alt={imgAlt}></img>: null}{liText}</a></li>);

            altNavigator.push(<li><a href={getTabProperty(t,'link')}>{liText}</a></li>);
        }
    });

    const downloadItem = ProductTabs.global.Download;
    const purchaseItem = ProductTabs.global.Purchase;
    const buyOnlineItem = ProductTabs.global.BuyOnline;
    const getQuoteItem = ProductTabs.global.GetQuote;

    return <div className='innerBody'>
        {
            props.Buy ?
            <ul className='prodEssentials'>
               <li><a className={downloadItem.class} href={`/buy/online/`}>{byLang(buyOnlineItem.label)}</a></li>
                <li><a className={purchaseItem.class} href={`javascript:getQuote();`}>{byLang(getQuoteItem.label)}</a></li>
            </ul>
            :
            <ul className='prodEssentials'>
                <li><a className={downloadItem.class} href={`/downloads/?prod=${props.Section}`}>{byLang(downloadItem.label)}</a></li>
                <li><a className={purchaseItem.class} href={`/buy/?prod=${props.Section}`}>{byLang(purchaseItem.label)}</a></li>
            </ul>
        }

        <div className='tabbedBody'>
            <div id='TabNavigation'>
                <ul>{tabNavigator}</ul>
            </div>
            <div className='leftBorder'>
                <div className='pageBody'>
                    <div className='pageContent'>
                        {props.children}
                    </div>
                </div>
            </div>{/* leftBorder */}
            <div id='AltNav'>
                <ul>{altNavigator}</ul>
            </div>
        </div>{/* tabbedBody */}
        {/* innerBody */}
    </div>
};