import Features from './features';
import KnowledgeBase from './kb';
import React from 'react';
import Screenshots from './screenshots';
import Summary from './summary';

export default path=>[
    {
      tabSection: "features",
      path: `${path}/features`,
      topic: "Features Description",
      tabContent: <Features/>,
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
      tabSection: "kb",
      path: `${path}/kb`,
      topic: "Knowledge Base",
      tabContent: <KnowledgeBase/>,
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
