import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import dataReducer from "./components/dataReducer";
import signInReducer from "./components/signInReducer";
import infoUserReducer from "./components/infoUserReducer";

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
import Footer from './pages/Footer';

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  info: dataReducer, 
  signIn: signInReducer,
  dataUser: infoUserReducer
  // + другие редьюсеры
});
let store=createStore(combinedReducer);

ReactDOM.render( 
  <Provider store={store}>
  <BrowserRouter>
    <div>
      <PagesLinks/>
      <PagesRouter/>
      <Footer/>
    </div>
  </BrowserRouter>
  </Provider>
, document.getElementById('container') );
