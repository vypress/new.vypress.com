import Auvis from '../one_way_messenger';
import Buy from '../buy';
import Chat from '../lan_chat';
import ChatTerminal from '../free_chat';
import Company from '../company';
import Downloads from '../downloads';
import Info from '../info';
import Messenger from '../lan_instant_messenger';
import React from 'react';
import Start from '../start';
import Support from '../support';

export default (topics) => [
  {
    path: "/one_way_messenger",
    topic: 'Vypress Auvis',
    render: (props) => {
      return <Auvis {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: "/lan_instant_messenger",
    topic: 'Vypress Messenger',
    render: (props) => {
      return <Messenger {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: "/lan_chat",
    topic: 'Vypress Chat',
    render: (props) => {
      return <Chat {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: "/free_chat",
    topic: 'Chat Terminal',
    render: (props) => {
      return <ChatTerminal {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: '/downloads',
    render: (props) => {
      return <Downloads {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: '/buy',
    render: (props) => {
      return <Buy {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: "/info",
    render: (props) => {
      return <Info {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: '/start',
    render: (props) => {
      return <Start {...props} topics={topics} />
    },
    exact: false
  },
  {
    path: '/company',
    topic: 'Our Company',
    render: (props) => {
      return <Company />
    },
    exact: false
  },
  {
    path: '/support',
    topic: 'Support',
    render: (props) => {
      return <Support {...props} topics={topics} />
    },
    exact: false
  },
];
