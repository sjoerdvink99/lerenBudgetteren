import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import {
  Login,
  Navbar,
  Landing,
  Education,
  Post,
  Register,
  NoPageFound,
  Footer,
  Dashboard,
  Investments,
  AccountDetails,
  Settings,
  Subscription,
  Privacy,
  Billing,
} from "./components";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            displayName: userAuth.displayName,
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
          },
        });
      } else {
        dispatch({
          type: actionTypes.LOG_OUT,
        });
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {!user ? (
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='*' component={NoPageFound} />
          </Switch>
        ) : (
          <div className='app'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/education' component={Education} />
              <Route path='/education/:postId' component={Post} />
              <Route exact path='/investments' component={Investments} />
              <Route exact path='/profile' component={AccountDetails} />
              <Route exact path='/profile/subscription' component={Subscription} />
              <Route exact path='/profile/privacy' component={Privacy} />
              <Route exact path='/profile/billing' component={Billing} />
              <Route exact path='/settings' component={Settings} />
            </Switch>
            <Footer />
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
