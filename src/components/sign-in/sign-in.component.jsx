import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,SignInWithGoogle} from '../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
       handleSubmit=async event=>{
           event.preventDefault();
           const {email,password}=this.state;
           try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
           }catch(error){
               console.log("error signing in",error)
           }
           
           
       }

       handleChange=event=>{
           const {name,value}=event.target;
           this.setState({[name]:value})
       }

    render(){
        const {email,password}=this.state;
        return(
           <div className='sign-in'>
            <h1>Already have an Account?</h1>
            <span>Sign in with email and password</span>
             <form onSubmit={this.handleSubmit}>
                 <FormInput type='email' name='email' label='Email' value={email} required handleChange={this.handleChange}/>
                 <FormInput type='password' name='password' label='Password' value={password} handleChange={this.handleChange}/>
                 <div className='buttons'>
                 <CustomButton type='submit'>SIGN IN</CustomButton>
                 <CustomButton isGoogleSignIn onClick={SignInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
             </div>
             </form>
           </div>
        )
    }
}

export default SignIn;