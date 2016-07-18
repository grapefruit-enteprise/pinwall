import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { signinUser }       from '../../actions/auth.js';
import    { Link }          from 'react-router';

class Signin extends Component {
   handleFormSubmit(formProps) {
     this.props.signinUser(formProps);
   }
  //
  // renderAlert() {
  //   if(this.props.errorMessage) {
  //     return (
  //       <div className="alert alert-danger">
  //         <strong>Oops!</strong> {this.props.errorMessage}
  //       </div>
  //     )
  //   }
  // }
  //
  render(){
    const { handleSubmit, fields: { organizationId, email, password }} = this.props;
    return (

      <div className="wrapper">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div className="form-wrapper">
              <div className="panel panel-default">
                <div className="panel-body">
                        <div className="form-title">
                        <h1>Log In<div className="float-left">
                        <Link to={"/"} ><i className="fa fa-times"
                        aria-hidden="true"></i></Link></div></h1></div>

                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                            <div className={`form-group ${organizationId.touched && organizationId.error ? 'has-error' : ''}`} >
                              <label className="control-label" id="org" for="Select-Org">Please select your organization</label>
                               <select name="Select-Org" className="form-control" {...organizationId} required>
                                <option>choose ...</option>
                                { this.props.allOrgs.map( org => <option key={org.id} value={org.id}>{org.name}</option>) }
                              </select>
                            </div>



                          <div className={`form-group ${email.touched && email.error ? 'has-error' : ''}`}>
                          {email.touched && email.error ? <div className="control-label">{email.error}</div> : ''}
                            <label className="control-label">Email</label>
                            <input type="email" className="form-control" type="email" {...email} />
                          </div>

                          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>
                          {password.touched && password.error ? <div className="control-label">{password.error}</div> : ''}
                            <label className="control-label">Password</label>
                            <input type="password" className="form-control" {...password}/>
                          </div>


                          <button className="button" type="submit">Login</button>
                        </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


function validate(formProps){
  const errors = {};
  if(!formProps.email) {
    errors.email = "You must enter your email";
  }

  if(!formProps.password) {
    errors.password = "You must enter your password";
  }

     if(!formProps.organizationId){
        errors.organizationId = "You must choose an organization to Sign up with"
    }

  if(formProps.organizationId) {
      if(formProps.organizationId === "" || formProps.organizationId === "choose ..." ){
        errors.organizationId = "You must choose an organization to Sign up with"
      }
  }

  return errors;
}

function mapStateToProps(state){
  return { allOrgs: state.auth.allOrgs}

}

export default reduxForm({
  form: 'signin',
  fields: ['organizationId', 'email', 'password'],
  validate
}, mapStateToProps,{signinUser:signinUser} )(Signin);
