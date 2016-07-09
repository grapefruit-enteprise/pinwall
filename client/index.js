var React = require('react');
var ReactDOM = require('react-dom');

class Test extends React.Component {
  render(){
    return (
      <div> Test123 </div>
    )
  }
}


ReactDOM.render(<Test />, document.getElementById('app'));
