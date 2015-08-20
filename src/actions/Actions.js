'use strict';

import Reflux from 'reflux';

let ImageActions = Reflux.createActions({
  'fetchList': {},
  'login': {children: ['success', 'failed']}
});
export default ImageActions;



