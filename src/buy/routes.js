import BuyOnline from './online';
import Default from './default';
import EducationDiscounts from './academic';
import Pricing from './prices';
import PurchaseOptions from './options';
import React from 'react';

export default path => [
    {
        tabSection: "prices",
        path: `${path}/prices`,
        topic: "Pricing",
        tabContent: <Pricing />,
        exact: false
    },
    {
        tabSection: "options",
        path: `${path}/options`,
        topic: "Purchase Options",
        tabContent: <PurchaseOptions />,
        exact: false
    },
    {
        tabSection: "order",
        path: `${path}/online`,
        topic: "Buy Online",
        tabContent: <BuyOnline />,
        exact: false
    },
    {
        tabSection: "academic",
        path: `${path}/academic`,
        topic: "Education Discounts",
        tabContent: <EducationDiscounts />,
        exact: false
    },
    {
        tabSection: "buy",
        path: `${path}/`,
        topic: null,
        tabContent: <Default />,
        exact: false
    },
];
