import React, { Component } from 'react';
import  { reduxForm }       from 'redux-form';
import { signupUser }       from '../../actions/auth.js';
import    { Link }          from 'react-router';


class Signup extends Component {

  handleFormSubmit(formProps){
    this.props.signupUser(formProps);
  }
  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          Your sign up has failed
        </div>
      )
    }
  }

  render(){
    const { handleSubmit, fields: {organizationId, username, firstname, lastname ,email, password, passwordConfirm}} = this.props;

    console.log("password", password)

    return (

      <div className="wrapper">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div className="form-wrapper">
              <div className="panel panel-default">
                <div className="panel-body">
                        <div className="form-title">
                        <h1>Signup<div className="float-left">
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


                          <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" {...username}/>
                          </div>
                          <div className="form-group">
                            <label >Firstname</label>
                            <input className="form-control" {...firstname}/>
                          </div>
                          <div className="form-group">
                            <label>Lastname</label>
                            <input className="form-control"  {...lastname}/>
                          </div>

                          <div className={`form-group ${email.touched && email.error ? 'has-error' : ''}`}>
                          {email.touched && email.error ? <div className="control-label">{email.error}</div> : ''}
                            <label className="control-label">Email</label>
                            <input className="form-control" type="email" {...email} />
                          </div>
                          <div className="error-message">{password.touched && password.error ? password.error : ''}</div>
                          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>
                          {password.touched && password.error ? <div className="control-label">Your passwords have to match</div> : ''}
                            <label className="control-label" >Password</label>
                            <input type="password" className="form-control" {...password}/>

                          </div>
                          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>
                            <label className="control-label">Password Confirm</label>
                            <input type="password" className="form-control" {...passwordConfirm}/>
                          </div>
                           {this.renderAlert()}
                          <button className="button" type="submit">Sign up</button>
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

  if(formProps.password){
    if(formProps.password.length < 7){
      errors.password = "Your Password must be at least 7 characters"
    }
  }

  if(formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match'

  }


  if(!formProps.email) {
    errors.email = "You must enter your email";
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
  form: 'signup',
  fields: ['organizationId', 'username', 'firstname','lastname','email','password', 'passwordConfirm'],
  validate

}, mapStateToProps, { signupUser:signupUser })(Signup)
