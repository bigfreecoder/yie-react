'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Component from 'components/Component.js';

describe('Component', () => {
    let ComponentComponent;

    beforeEach(() => {
        ComponentComponent = createComponent(Component);
    });

    it('should have its component name as default className', () => {
        expect(ComponentComponent._store.props.className).toBe('Component');
    });
});
