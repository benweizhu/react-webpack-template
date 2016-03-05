jest.unmock('../index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Hello from '../index.js';

describe('Hello', () => {
  it('check text content', () => {
    const hello = TestUtils.renderIntoDocument(
      <Hello/>
    );

    const helloNode = ReactDOM.findDOMNode(hello);

    expect(helloNode.textContent).toEqual('Hello React!');
  });
});
