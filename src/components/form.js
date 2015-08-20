'use strict';
// JS
import React from 'react/addons';

let myForm = React.createClass({
  render: function () {
    return (
      <div class="form" data-role="IamForm">
        <input type="text" defaultValue="默认值" />
      </div>
    );
  }
});

export default myForm;
