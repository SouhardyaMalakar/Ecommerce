import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import PrivateRoute from './components/HOC/PrivateRoute'
import { isUserLoggedIn } from './actions/auth.action'

import Home from './containers/Home'
import Signup from './containers/Signup'
import Signin from './containers/Signin'

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">

      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <Route path='/Signin' component={Signin} />
        <Route path='/Signup' component={Signup} />
      </Switch>

    </div>
  );
}

export default App;
