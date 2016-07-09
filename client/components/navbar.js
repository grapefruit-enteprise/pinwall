import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  //Add onSubmit={} to the form element once the callback is written

  render() {
    return(
      <div className="nav">
        <h2>NavBar</h2>
        <form >
          <input type="text" className="form-control" value={this.state.term} onChange={this.onInputChange.bind(this)}/>
        </form>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
