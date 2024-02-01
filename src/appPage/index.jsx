import { Redirect, Route, useRouteMatch } from "react-router-dom";

import { Helmet } from "react-helmet";
import React from 'react';
import TopLinks from "../topLinks"
import { byLang } from "../utils.js"
import getRoutes from "./routes"

export default props => {
  const topLinks = TopLinks.map(l => {
    return <li><a id={l.topID} href={byLang(l.link)}>{byLang(l.label)}</a></li>
  });

  const routes = getRoutes(props.topics);

  const match = routes.find(route => useRouteMatch(route));

  if (match && match.topic) {
    props.topics.push({ label: match.topic, link: match.path });
  }

  return <>
    <Helmet>
      <link rel="stylesheet" href="/css/standard.css" />
      <link rel="stylesheet" href="/css/internpage.css" />
      <link rel="stylesheet" href="/css/tabs.css" />
    </Helmet>
    <div className="contentColumn" id="topContentColumn">
      <ul id="topNav" className="BodyTextSm">
        {topLinks}
      </ul>

      <div id="SiteTreeNav" className="BodyTextSm">
        <div id="siteTreeControl"></div>
      </div>

      {match ? <Route {...match} /> : <Redirect to="/home" />}

      <div className="pageFooter">
        <div>
          <div>
          </div>
        </div>
      </div>

      <div id="contentFooter" className="BodyTextSm">
        <a href="#topContentColumn"><img src="/images/pix/arrowblue.gif" width="4" height="6" alt=">" />&nbsp;back to top</a>
        <p id="copyrightNotice">
          Please email your comments on this site to <a href="mailto:webmaster@vypress.com">webmaster@vypress.com</a><br />&copy; Copyright 1997-2024 VyPRESS<sup>&reg;</sup> Research, LLC. All rights reserved.<br /><a href="/info/legal/">Terms &amp; Conditions</a> | <a href="/info/">Privacy Policy</a>
        </p>
      </div>
    </div> {/* contentColumn */}

    {/* VyPRESS logo */}
    <a href="/" target="_top" title="VyPRESS Research, LLC" id="vypLogoSmall"></a>
  </>
};