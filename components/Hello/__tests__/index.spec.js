jest.unmock('../index.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Hello from '../index.jsx';

describe('Hello', () => {
  it('check text content', () => {
    const hello = TestUtils.renderIntoDocument(
      <Hello name="Benwei"/>
    );

    const helloNode = ReactDOM.findDOMNode(hello);
    expect(helloNode.textContent).toEqual('Hello, Benwei!');
  });
});
