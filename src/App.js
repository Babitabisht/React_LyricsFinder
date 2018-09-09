import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from "./context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <HashRouter>
          <React.Fragment>
            <Navbar />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
            <Footer/>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
