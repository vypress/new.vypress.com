import React from 'react';
import Screenshots from './screenshots';
import Summary from './summary';
import Tutorial from './tutorial';

export default path=>[
    {
      tabSection: "tutorial",
      path: `${path}/tutorial`,
      topic: "Tutorial",
      tabContent: <Tutorial/>,
      exact: false
    },
    {
      tabSection: "screenshots",
      path: `${path}/screenshots`,
      topic: "Screenshots",
      tabContent: <Screenshots/>,
      exact: false
    },
    {
      tabSection: "summary",
      path: `${path}/`,
      topic: "Information",
      tabContent: <Summary/>,
      exact: false
    },
  ];
