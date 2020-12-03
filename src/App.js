import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Login from './Components/script/Login';
import Registration from './Components/script/Registration';
import Dashboard from './Components/script/Dashboard/Dashboard';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import PageNotFound from './Components/script/PageNotFound';
import PrivateRoute from './Components/reusable/PrivateRoute';
import PublicRoute from './Components/reusable/PublicRoute';

import setAuthToken from './Components/utilities/setAuthToken';
import {onLoginSuccess} from './Components/Redux/auth/AuthAction';
import jwdDecode from "jwt-decode";
import Header from './Components/script/Dashboard/Header';
import AddCategory from './Components/script/Dashboard/Category/AddCategory';
import ViewCategory from './Components/script/Dashboard/Category/ViewCategory';
function App() {
  
  const token=localStorage.getItem("user");
  if(token){
    setAuthToken(token);
    const decoded=jwdDecode(token);
    store.dispatch(onLoginSuccess(decoded));
  }


const Main=withRouter(({location})=>{
    return(
      <div>
      {location.pathname!="/" && location.pathname!="/register" && <Header/>}
      <Switch>
      <PublicRoute exact path="/" component={Login}/>
      <PublicRoute exact path="/register" component={Registration}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/add-category" component={AddCategory}/>
      <PrivateRoute exact path="/view-category" component={ViewCategory}/>
      <PublicRoute exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
      </div>
    )
})


  return (
    <Provider store={store}>
    <Router>
      <Main></Main>
    </Router>
    </Provider>
  );
}

export default App;
