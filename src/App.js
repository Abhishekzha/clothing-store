import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch,Route,Redirect} from 'react-router-dom';
import {auth,createUserProfileDocument} from './components/firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-action';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import CheckOut from './pages/check-out/check-out.component';

class App extends React.Component {
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
        if(userAuth){
          const userRef=await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot=>{
           setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          })
          
        }
        setCurrentUser(userAuth);
      })
      
  }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }
    render(){
      return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckOut}/>
            <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUp/>)}/>
          </Switch>
          
        </div>
      );
    }

}
 const mapStateToProps=createStructuredSelector({
   currentUser:selectCurrentUser
 });

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);