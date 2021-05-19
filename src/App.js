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
  Register,
  NoPageFound,
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
          <>
            <Navbar />
            <Switch>
              <Route exact path='/education' component={Education} />
            </Switch>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
