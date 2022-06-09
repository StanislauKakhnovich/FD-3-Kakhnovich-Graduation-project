import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import LaptopProductsInterface from '../components/LaptopProductsInterface';

class Page_Products extends React.PureComponent {
       
  render() {
    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <LaptopProductsInterface
      />
      </div>
    );
  }
}


export default Page_Products;
    