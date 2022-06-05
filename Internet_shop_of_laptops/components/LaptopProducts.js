import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LaptopProduct from './LaptopProduct';


class int_LaptopProducts extends React.PureComponent {

  static propTypes = {
    products: PropTypes.array.isRequired, // получено из Redux
  };
  
  state = {

  }
  
  render() {

    var productsCode=this.props.products.map( product =>
      <LaptopProduct key={product.id} info={product}  />
    );
    return (
          <div className='LaptopProducts'>
            {productsCode}
          </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    products: state.info.data,
  };
};
    
const LaptopProducts = connect(mapStateToProps)(int_LaptopProducts);

export default LaptopProducts;

