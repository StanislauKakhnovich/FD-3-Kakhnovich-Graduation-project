import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './LaptopProduct.css';

class LaptopProduct extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameProduct: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  };

  render() {
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.props.info.description}</span>
        <NavLink to={"/product/"+this.props.info.id} className="MobileClientFIO">{this.props.info.nameProduct}</NavLink>
      </div>
    );

  }

}

export default LaptopProduct;
