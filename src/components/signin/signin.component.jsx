import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

 render(){
   this.handleSubmit = event => {
     event.preventDefault();
     this.setState({ email: '', password: ''});
   }

   this.handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value});
   }

   return(
     <div className="sign-in">
       <h2>I already have an account</h2>
       <span>Sign In with your email and password</span>
       <form onSubmit={this.handleSubmit}>
         <FormInput 
           type="email" 
           name="email" 
           handleChange={this.handleChange} 
           value={this.state.email} 
           label="Email"
           required/>
         <FormInput 
           type="password" 
           name="password" 
           handleChange={this.handleChange} 
           value={this.state.password} 
           label="Password"
           required/>
         <CustomButton type="submit"> Sign In</CustomButton>
       </form>
     </div>
   )
 }
}

export default SignIn;