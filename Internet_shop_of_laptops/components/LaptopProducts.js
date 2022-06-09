import React from 'react';
import PropTypes from 'prop-types';

import LaptopProduct from './LaptopProduct';


class LaptopProducts extends React.PureComponent {

  static propTypes = {
    // products: PropTypes.array.isRequired, // получено из Redux
  };
  
  state = {

  }

  
  render() {
    // console.log(this.props.products);
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

// const mapStateToProps = function (state) {
//   return {
    
//   };
// };
    
// const LaptopProducts = connect(mapStateToProps)(int_LaptopProducts);


// const mapStateToProps = function (state) {
//   return { };
// };
    
// const LaptopProducts = connect(mapStateToProps)(int_LaptopProducts);

export default LaptopProducts;

