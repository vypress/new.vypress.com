import Home from '../home';
import Page from '../appPage';
import React from 'react';
import{ Redirect } from "react-router-dom";

export default topics => [
  {
    path: '/',
    render: _ => <Redirect to="/home" />,
    exact: true
  },
  {
    path: '/home',
    render: (props) => {
      return <Home {...props} />
    }
  },
  {
    path: '/',
    render: (props) => {
      return <Page {...props} topics={topics} />
    },
    exact: false
  }
]
