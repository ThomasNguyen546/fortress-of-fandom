import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { HashRouter, Switch, Route } from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Podcast from './components/Podcast';
import Discussion from './components/Discussion';
import Shop from './components/Shop';
import Login from './components/Login';
import Footer from './components/Footer';
import SignUp from './components/Signup';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }, 
  uri: '/graphql'
});

function App() { 
  return (
    <div>
    <ApolloProvider client={client}>
    <Router>
    <div id="wrapper">
      <Header></Header>
     {/* <Switch> */}
            <Route exact={true} path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Podcast" component={Podcast} />
            <Route exact path="/Discussion" component={Discussion} />
            <Route exact path="/Shop" component={Shop} />
            <Route exact path="/Signup" component={SignUp} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Footer" component={Footer} />
     {/* </Switch> */}
     <Footer></Footer>
    </div>
    </Router>
    </ApolloProvider>
    </div>
  )
}

export default App;