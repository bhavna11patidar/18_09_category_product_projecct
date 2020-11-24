import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Login from './Components/script/Login';
import Registration from './Components/script/Registration';
import Dashboard from './Components/script/Dashboard/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Registration}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Router>
    </Provider>
  );
}

export default App;
