var React = require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <h1>Hello React!</h1>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));
