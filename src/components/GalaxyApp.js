'use strict';
// JS
import Reflux from 'reflux';
import React from 'react/addons';
import ImageStore from '../stores/StoreStore';
import ImageActions from '../actions/ActionActionCreators';

// CSS
import 'normalize.css';
import '../styles/main.css';

let ReactTransitionGroup = React.addons.TransitionGroup;
let imageURL = require('../images/yeoman.png');
let ImageGrid = React.createClass({

  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render() {
    return (
      <div className="main todos">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <p onClick={ImageActions.fetchList}>xxxx:{this.state.imagestore} ======= </p>
        </ReactTransitionGroup>
      </div>
    );
  }
});

export default ImageGrid;
