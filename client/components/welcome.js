import React, { Component }     from 'react';
import        { connect }       from 'react-redux';
import { Link, browserHistory } from 'react-router';
import        { fetchOrgs }     from '../actions/auth.js';


class Welcome extends Component {

  componentWillMount() {
    // var token = localStorage.getItem('token');
    // var orgId = localStorage.getItem('orgId');
    // if (token) {
    //   console.log("orgId is..", orgId, ',', typeof orgId);
    //   browserHistory.push(`/organizations/${orgId}`)
    // } else {
      this.props.fetchOrgs();
    // }
  }

  render(){
   return (
     <div>
      <div id="banner">
       <div className="banner_content animated fadeInRightBig">
         <h1>PinWall</h1>
         <p>Your personal or professional online <strong>Pinboard</strong>. Never forget an idea again.</p>
         <button className="button">
            <Link to="/signup">  Sign Up </Link>
         </button>
       </div>
     </div>
     <div id="testimonial" className="animated fadeInLeftBig">
       <div className="welcome-wrapper">
       <i className="fa fa-quote-left" aria-hidden="true"></i>
         <p className="quote">Makes it so easy to share my ideas with everyone in my organization.</p>
         <p className="name"> - Jon Smith</p>
       </div>
     </div>
     <div id="callouts">
       <div className="callout_inner">
         <div className="welcome-wrapper">
           <div className="callout">
             <i className="fa fa-thumb-tack animated rotateIn" aria-hidden="true"></i>
             <h2>Online PinBoard</h2>
             <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
           </div>
           <div className="callout">
             <i className="fa fa-rocket animated rotateIn"></i>
             <h2>The Skies the limit</h2>
             <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
           </div>
           <div className="callout">
             <i className="fa fa-bolt animated rotateIn"></i>
             <h2>Lightning Fast</h2>
             <p>Built with React and NodeJS. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
           </div>
         </div>
       </div>
     </div>
     <div id="bottom_cta">
       <div className="welcome-wrapper">
         <h2>You have to try it</h2>
         <p>Sign up you won't regrete </p>
         <button className="button">
         <Link to="/signup">  Sign Up </Link>

         </button>
       </div>
     </div>
    <footer>
        <p>
          &copy; GrapeFruit Ent.
      </p>
      </footer>

     </div>

   )
  }
}

function mapStateToProps(state) {
  return {orgId: state.auth.orgId};
}

export default connect( mapStateToProps, { fetchOrgs:fetchOrgs})(Welcome);
