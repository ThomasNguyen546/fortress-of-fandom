import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Podcast from './components/Podcast';
import Discussion from './components/Discussion';
import Shop from './components/Shop';

function App() { 
  return (
    <div>
    <HashRouter>
    <div id="wrapper">
      <Header></Header>
     <Switch>
            <Route exact={true} path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Podcast" component={Podcast} />
            <Route exact path="/Discussion" component={Discussion} />
            <Route exact path="/Shop" component={Shop} />
     </Switch>
     {/* <Footer></Footer> */}
    </div>
    </HashRouter>
    </div>
  )
}

export default App;