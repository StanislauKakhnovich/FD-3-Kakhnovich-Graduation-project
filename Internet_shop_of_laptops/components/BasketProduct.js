import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import './BasketProduct.css';

class int_BasketProduct extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameProduct: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  };


  incCounter = () => {
    this.props.dispatch( { type:"INC", incProduct: {...this.props.info} } );
  }

  decCounter = () => {
    if(this.props.info.quantity>0) this.props.dispatch( { type:"DEC", decProduct: {...this.props.info} } );
  }

  deletePosition = () => {
    this.props.dispatch( { type:"DELETE", deleteProduct: {...this.props.info} } );
  }


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
          <button className='DeleteProductBasket' onClick={this.deletePosition}>Удалить</button>
          <div className="CounterButton">
            <input type='button' value='-' onClick={this.decCounter} />
            <span className="CounterButtonValue">{this.props.info.quantity}</span>
            <input type='button' value='+' onClick={this.incCounter} />
          </div>
          <div className='ProductPrice'>{this.props.info.price.toFixed(2)} руб</div>
        </div>
      </div>
    );

  }

}


const mapStateToProps = function (state) {
  return { }; 
};

const BasketProduct = connect(mapStateToProps)(int_BasketProduct);

export default BasketProduct;