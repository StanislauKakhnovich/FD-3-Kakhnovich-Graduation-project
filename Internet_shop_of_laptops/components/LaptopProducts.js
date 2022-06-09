import React from 'react';
import PropTypes from 'prop-types';

import LaptopProduct from './LaptopProduct';


class LaptopProducts extends React.PureComponent {

  
  render() {

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

