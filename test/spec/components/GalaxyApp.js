'use strict';

describe('GalaxyApp', () => {
  let React = require('react/addons');
  let GalaxyApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GalaxyApp = require('components/GalaxyApp.js');
    component = React.createElement(GalaxyApp);
  });

  it('should create a new instance of GalaxyApp', () => {
    expect(component).toBeDefined();
  });
});
