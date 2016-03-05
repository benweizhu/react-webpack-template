import React from 'react';
import classnames from 'classnames/bind';

import styles from './Hello.scss';

const cx = classnames.bind(styles);

const propTypes = {
  name: React.PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'React',
};

class Hello extends React.Component {
  render() {
    return <h1 className={ cx('red', 'border') }>Hello, { this.props.name }!</h1>;
  }
}

Hello.propTypes = propTypes;
Hello.defaultProps = defaultProps;

export default Hello;
