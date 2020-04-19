import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: ''

    }
  }

  render(){
    this.handleChange = event => {
      const {name, value} = event.target;

      this.setState({ [name]: value});
    }

    this.handleSubmit = async event => {
      event.preventDefault();

      const { email, displayName, password, confirmPassword } = this.state;
      if(password !== confirmPassword){
        alert("Password don't match");
        return;
      }

      try{
        const { user } = await auth.createUserWithEmailAndPassword(email,password);

        await createUserProfileDocument(user,{displayName});

        this.setState({ email: '', displayName: '', password: '', confirmPassword: ''});
      }
      catch(error){
        console.error(error);
      }
      
    }
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          type='email'
          label='Email'
          name='email'
          handleChange={this.handleChange}
          value={this.state.email}
          required
        />
        <FormInput
          type='text'
          label='Display Name'
          name='displayName'
          handleChange={this.handleChange}
          value={this.state.displayName}
          required
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          handleChange={this.handleChange}
          value={this.state.password}
          required
        />
        <FormInput
          type='password'
          label='Confirm Password'
          name='confirmPassword'
          handleChange={this.handleChange}
          value={this.state.confirmPassword}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
      </div>
    )
  }
}

export default SignUp;