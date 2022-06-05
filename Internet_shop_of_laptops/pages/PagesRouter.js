import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Page_Company from './Page_Company';
import Page_Products from './Page_Products';
import Page_Product from './Page_Product';
import Page_Sign_Up from './Page_Sign_Up';
import Page_Sign_In from './Page_Sign_In';
import Page_Basket from './Page_Basket';
import Page_Contacts from './Page_Contacts';

import dataReducer from "../components/dataReducer";

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  info: dataReducer, 
  // + другие редьюсеры
});
let store=createStore(combinedReducer);

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Page_Company/>} />
          <Route path="/products" element={<Page_Products/>} />
          <Route path="/product/:prid" element={<Page_Product/>} />
          <Route path="/sign_up" element={<Page_Sign_Up/>} />
          <Route path="/sign_in" element={<Page_Sign_In/>} />
          <Route path="/basket" element={<Page_Basket/>} />
          <Route path="/contacts" element={<Page_Contacts/>} />
        </Routes>
      </Provider>

    );
    
  }

}
    
export default PagesRouter;
    