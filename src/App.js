import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Routes from './Routes'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
