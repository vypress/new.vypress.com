import App from './src/app'
import { Helmet } from "react-helmet";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SiteTreeControl from "./src/components/SiteTreeControl"
import { StaticRouter } from "react-router-dom";
import createError from 'http-errors';
import express from 'express';
import fs from 'fs';
import logger from 'morgan';
import path from 'path';

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  // This context object contains the results of the render
  const context = {};
  const topics = [{label: 'Vypress.com', link: '/home'}];
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <App topics={topics} />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx);
  const helmetData = Helmet.renderStatic();

  const topicsJsx = (
    <SiteTreeControl topics={topics} />
  );

  const treeControl = ReactDOMServer.renderToString(topicsJsx);
  const rootTreeControl = root.replace('<div id="siteTreeControl"></div>', treeControl);
  
  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    const indexFile = path.resolve('./src/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      data = data.replace('<title></title>', helmetData.title.toString());
      data = data.replace('<meta></meta>', helmetData.meta.toString());
      data = data.replace('<link></link>', helmetData.link.toString());
      data = data.replace('<script></script>', helmetData.script.toString());

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${rootTreeControl}</div>`)
      );
    });
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(`error ${err.message}`);
});

module.exports = app;