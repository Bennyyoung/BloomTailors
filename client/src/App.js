import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Head from './Components/Head';
import Home from './Components/Home.js';
import Tailors from './Components/Tailors';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import LoginForm from './Components/Login';
// import Maps from './Components/Maps';
import OrderNow from './Components/OrderNow';
import WrapppedRegistrationForm from './Components/SignUp';
import Foot from './Components/Foot';
import './App.css';
import 'normalize.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
            <Head />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/your_tailor" component={Tailors} />
                <Route path="/about_us" component={About} />
                <Route path="/contact_us" component={ContactUs} />
                <Route path="/login" component={LoginForm} />
                <Route path="/order_now" component={OrderNow} />
                <Route path="/sign_up" component={WrapppedRegistrationForm} />
              </Switch>
              {/*<Maps />*/}
            {/*<Foot />*/}
        </div>
      </Router>  
    );
  }
}

export default App;