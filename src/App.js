import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Login from './Components/script/Login';
import Registration from './Components/script/Registration';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Registration}/>
    </Router>
    </Provider>
  );
}

export default App;
