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
      <div className='LaptopsContainer'>
      <div className='LaptopProduct'>
        <div className='ImageLaptop'>
          <img src={`../images/${this.props.info.nameProduct.replace(/\s/g, '_')}.jpeg`}></img>
        </div>
        <div className='Name-Description'>
          <NavLink to={"/product/"+this.props.info.id} className="NameProduct">{this.props.info.nameProduct}</NavLink>
          <div className='ProductDescription'>{this.props.info.description}</div>
          {/* <div className='ProductDescription'>{this.props.info.id}</div> */}
          
        </div>
        <button className='AddProductBasket'>В корзину</button>
      </div>
      </div>
    );

  }

}

export default LaptopProduct;
