import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Foot from './Components/Foot';
import Head from './Components/Head';
import Home from './Components/Home.js';
import LoginForm from './Components/Login';
import NotFoundPage from './Components/NotFoundPage';
import WrapppedRegistrationForm from './Components/SignUp';
import TermsOfUse from './Components/TermsOfUse';
import Tailors from './Components/Tailors';
// import LoginModal from './Components/LoginModal';
import './App.css';
import 'normalize.css';
import IndividulTailor from './Components/IndividualTailor';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
            <Head />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/your_tailor" component={Tailors} />
                <Route path="/my_tailor" component={IndividulTailor} />
                <Route path="/about_us" component={About} />
                <Route path="/contact_us" component={ContactUs} />
                <Route path="/login" component={LoginForm} />
                <Route path="/sign_up" component={WrapppedRegistrationForm} />
                <Route path="/terms_of_use" component={TermsOfUse} />
                <Route component={NotFoundPage} />
              </Switch>
              {/*<Maps />*/}
            <Foot />
        </div>
      </Router>  
    );
  }
}

export default App;