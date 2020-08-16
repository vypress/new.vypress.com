import Legal from './legal';
import Privacy from './privacy';
import React from 'react';

export default path=>[
   {
      tabSection: "privacy",
      path: `${path}/`,
      topic: "Privacy Statement",
      tabContent: <Privacy/>,
      exact: true
    },
    {
      tabSection: "terms",
      path: `${path}/legal`,
      topic: "Terms & Conditions",
      tabContent: <Legal/>,
      exact: true
    },
  ];
