'use strict';

describe('StoreStore', () => {
  let store;

  beforeEach(() => {
    store = require('stores/StoreStore.js');
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });
});
