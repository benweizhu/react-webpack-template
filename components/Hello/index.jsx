import React from 'react';

const propTypes = {
  name: React.PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'React',
};

class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

Hello.propTypes = propTypes;
Hello.defaultProps = defaultProps;

export default Hello;
