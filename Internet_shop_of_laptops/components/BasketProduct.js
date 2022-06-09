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

  state = {
    quantity: this.props.info.quantity,
  }

  incCounter = () => {
    this.props.dispatch( { type:"INC", incProduct: {...this.props.info} } );
    this.setState({quantity: this.state.quantity++})
  }

  decCounter = () => {
    this.props.dispatch( { type:"DEC" } );
  }

  render() {
    console.log("render BasketProduct")
    
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
            <span className="CounterButtonValue">{this.state.quantity}</span>
            <input type='button' value='+' onClick={this.incCounter} />
            </div>
          <div className='ProductPrice'>{this.props.info.price.toFixed(2)} руб</div>
        </div>
      </div>
    );

  }

}


const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux
const BasketProduct = connect(mapStateToProps)(int_BasketProduct);

export default BasketProduct;