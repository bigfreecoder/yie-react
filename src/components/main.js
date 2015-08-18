'use strict';

var GalaxyApp = require('./GalaxyApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GalaxyApp}>
    <Route name="/" handler={GalaxyApp} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
