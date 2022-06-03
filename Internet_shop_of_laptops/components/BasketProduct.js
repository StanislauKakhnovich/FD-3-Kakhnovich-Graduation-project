import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './BasketProduct.css';

class BasketProduct extends React.PureComponent {

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
            <img src={`../images/${this.props.info.nameProduct.replace(/\s/g, '_')}.jpeg`} title={this.props.info.nameProduct} alt='Фото ноутбука'></img>
          </div>
          <div className='Name-Description'>
            <NavLink to={"/product/"+this.props.info.id} className="NameProduct">Ноутбук {this.props.info.nameProduct}</NavLink>
            <div className='ProductDescription'>{this.props.info.description}</div>
          </div>
          <button className='DeleteProductBasket'>Удалить</button>
          <div className="CounterButton">
            <input type='button' value='-' onClick={this.decCounter} />
            {/* <span className="CounterButtonValue">{counterValue}</span> */}
            <span className="CounterButtonValue">{0}</span>
            <input type='button' value='+' onClick={this.incCounter} />
            </div>
          <div className='ProductPrice'>{this.props.info.price.toFixed(2)} руб</div>
        </div>
      </div>
    );

  }

}

export default BasketProduct;