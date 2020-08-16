import GateGourmet from './gategourmet';
import KnowledgeBase from './kb';
import React from 'react';
import Welcome from './welcome';

export default path => [
  {
    tabSection: "kb",
    path: `${path}/kb/gategourmet`,
    topic: "Knowledge Base",
    tabContent: <GateGourmet />,
    exact: false
  },
  {
    tabSection: "kb",
    path: `${path}/kb`,
    topic: "Knowledge Base",
    tabContent: <KnowledgeBase />,
    exact: false
  },
  {
    tabSection: "welcome",
    path: `${path}/`,
    topic: "",
    tabContent: <Welcome />,
    exact: false
  },
];
