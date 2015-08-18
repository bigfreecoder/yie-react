'use strict';

import React from 'react/addons';

//var Actions = require('actions/xxx')

import 'styles/Component.less';

let Component = React.createClass({

  render: function () {
    return (
        <div className="Component">
          <p>Content for Component</p>
        </div>
      );
  }
});

module.exports = Component;
