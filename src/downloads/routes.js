import Default from './default';
import GoDownload from './go';
import React from 'react';

export default path => [
  {
    path: `${path}/go`,
    topic: "Downloads",
    tabContent: <GoDownload />,
    exact: false
  },
  {
    path: `${path}/`,
    topic: "Downloads",
    tabContent: <Default />,
    exact: false
  },
];
