import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {ProtectedRoute} from './util/protectedRoute';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

const Routes = () =>{
      return(
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/" component={Home}/>
            <Route  path="/signin" component={Signin} />
            <Route  path="/signup" component={Signup} />
             <Route path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      )
}
 
export default Routes;