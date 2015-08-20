'use strict';

import Reflux from 'reflux';
import ImageActions from '../actions/Actions';

let ImageStore = Reflux.createStore({
  listenables: [ImageActions],
  imagelist: [],
  init() {
    this.fetchList();
  },
  fetchList() {
    this.imagelist = [{
      name: '图片1',
      key: 'key1'
    },
    {
      name: '图片2',
      key: 'key2'
    },
    {
      name: '图片3',
      key: 'key3'
    }];
    this.trigger(this.imagelist);
  }
});

export default ImageStore;
