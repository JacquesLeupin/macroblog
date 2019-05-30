import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Routes from './Routes'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
