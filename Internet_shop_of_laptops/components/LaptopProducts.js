import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LaptopProduct from './LaptopProduct';


class LaptopProducts extends React.PureComponent {
  // static propTypes = {
  //   sign: PropTypes.bool.isRequired, // получено из Redux
  //   user: PropTypes.object.isRequired, // получено из Redux
  // };
  


  render() {
    console.log('render LaptopProducts');
    if (this.props.products) {
      var productsCode=this.props.products.map( product =>
        <LaptopProduct key={product.id} info={product}  />
      );
    }
    
    return (
          <div className='LaptopProducts'>
            {productsCode}
          </div>
    );
  }
}

export default LaptopProducts;

