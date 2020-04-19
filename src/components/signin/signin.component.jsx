import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    this.handleSubmit = async event => {
      event.preventDefault();
      const { email, password} = this.state;
      try{
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({ email: '', password: '' });
      }
      catch(error){
        console.log(error);
      }
    }

    this.handleChange = event => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
    }

    return (
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
            required />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;