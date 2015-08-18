'use strict';

import Reflux from 'reflux';
import ImageActions from '../actions/ActionActionCreators';

let ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  init() {
    this.fetchList();
  },
  fetchList() {
    this.imagelist = [1, 2, 3, 4, 55];
    this.trigger(this.imagelist);
  }
});

export default ImageStore;
