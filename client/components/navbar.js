import React, { Component } from 'react';
import        { Link }      from 'react-router';
import        { connect }   from 'react-redux';



class NavBar extends Component {



  render() {
    console.log("NAVBAR", this.params)
    return(
      <div>
        <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container-fluid">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to={"/"} className="navbar-brand" href="#">
                <img alt="Brand" src="/style/images/white_PiNWALL.svg" />
              </Link>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
              <li> <Link to={"/organizations/" + "1" + "/" +
               "users/1" + "/notes"}>Create Note </Link></li>
               <li>  <a href="#">Login</a> </li>
               <li>  <a href="#">Sign up</a> </li>

              </ul>
            </div>{/* /.navbar-collapse */}
          </div>
        </nav>

      </div>
      /* /.container-fluid */
    )
  }
}


export default connect(null)(NavBar);
