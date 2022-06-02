import React from 'react';
import PropTypes from 'prop-types';

import LaptopProduct from './LaptopProduct';

import './LaptopProducts.css';

class LaptopProducts extends React.PureComponent {

  static propTypes = {
    products:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameProduct: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
  };
  
  render() {

    var productsCode=this.props.products.map( product =>
      <LaptopProduct key={product.id} info={product}  />
    );

    return (
        
        <div className='LaptopProducts'>
          {productsCode}
        </div>
    )
    ;

  }

}

export default LaptopProducts;
