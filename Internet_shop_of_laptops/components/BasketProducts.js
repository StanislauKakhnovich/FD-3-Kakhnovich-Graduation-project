import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import $ from 'jquery';

import BasketProduct from './BasketProduct';
import './BasketProducts.css';

class int_BasketProducts extends React.PureComponent {

  static propTypes = {
    sign: PropTypes.bool.isRequired, // получено из Redux
    user: PropTypes.object.isRequired, // получено из Redux
  };


  state = {
    selectedItem: this.props.user,
  }

  render() {

    if(this.props.sign) {
       let arr = JSON.parse(JSON.stringify(this.props.user.infoUser.basketProducts)) ;
      var productsSelected=arr.map( product =>
        <BasketProduct key={product.id} info={product}  />
      );
      var controlLength=arr.length;
      var qty = arr.reduce((sum, elem)=>sum+elem.quantity, 0);
      var sum = arr.reduce((sum, elem) =>sum+elem.quantity*elem.price,0);
    }

  

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        { 
        this.props.sign&&
        <div>
        <div className='Basket'>Корзина</div>
        {
          !controlLength==0&&
          <div className='Total'>В вашей корзине {qty} товаров на сумму {sum} рублей.</div>
        }
        <div className='LaptopProducts'>{productsSelected}</div>
        </div>
        }
        {
          controlLength==0&&
          <h2 className='Registr'>Ваша корзина пуста.</h2>
        }
        {
          !this.props.sign&&
          <h2 className='Registr'>Вы не зарегистрированы. Пройдите авторизацию или регистрацию.</h2>
        }
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    sign: state.signIn.stateIn,
    user: state.dataUser,
   };
};
    
const BasketProducts = connect(mapStateToProps)(int_BasketProducts);

export default BasketProducts;