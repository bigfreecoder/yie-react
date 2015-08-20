'use strict';
import React from 'react';
import Router from 'react-router';
import form from './components/form';
import hacked from './components/hacked';

let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let DefaultRoute = Router.DefaultRoute;

let content = document.getElementById('content');

let App = React.createClass({
  render() {
    return <RouteHandler />;
  }
});

let Routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={hacked}/>
    <Route path="form" handler={form} />
    <Route path="hacked" handler={hacked} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
