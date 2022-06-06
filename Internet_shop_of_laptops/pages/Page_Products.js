import React from 'react';
import PropTypes from 'prop-types';

import LaptopProductsInterface from '../components/LaptopProductsInterface';
import {connect} from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import dataReducer from "../components/dataReducer";

let combinedReducer=combineReducers({
  // редьюсер counterReducer отвечает за раздел state под именем counter
  info: dataReducer, 
  // + другие редьюсеры
});
let store=createStore(combinedReducer);

class Page_Products extends React.PureComponent {
          
  render() {
    return (
      <Provider store={store}>
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <LaptopProductsInterface
      />
      </div>
      </Provider>
    );
  }
}


export default Page_Products;
    