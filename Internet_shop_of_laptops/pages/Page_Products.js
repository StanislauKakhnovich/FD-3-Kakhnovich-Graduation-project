import React from 'react';
import PropTypes from 'prop-types';

import LaptopProducts from '../components/LaptopProducts';
import {connect} from 'react-redux';

class Page_Products extends React.PureComponent {
          
  render() {
    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <LaptopProducts
      />
      </div>
    );
  }
}


export default Page_Products;
    