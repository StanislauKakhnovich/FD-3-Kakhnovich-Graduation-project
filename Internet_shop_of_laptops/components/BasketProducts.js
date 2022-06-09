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
    quantity: 1,
    sum: 1000,
    selectedItem: this.props.user.infoUser.basketProducts,
  }



  // restoreInfo =()=> {
  //     $.ajax(
  //       {
  //           url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
  //           data : { f : 'READ', n : this.props.user.Password },
  //           success : this.readReady, error : this.errorHandler
  //       }
  //   );
  // }
  
  //  readReady=(callresult)=> {
  //   if ( callresult.error!=undefined )
  //       alert(callresult.error);
  //   else if ( callresult.result!="" ) {
  //       var info=JSON.parse(callresult.result);
  //       console.log(info);
  //       this.setState( {selectedItem:info.BasketProducts} );
  //   }
  // }
  
  // errorHandler=(jqXHR,statusStr,errorStr)=> {
  //   alert(statusStr+' '+errorStr);
  // }

  render() {
    console.log("render BasketProducts")
    // console.log(this.props.user.infoUser.basketProducts)
    if(this.props.sign) {

       let arr = JSON.parse(JSON.stringify(this.state.selectedItem)) ;
      var productsSelected=arr.map( product =>
        <BasketProduct key={product.id} info={product}  />
      );
    }

  

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        { 
        this.props.sign&&
        <div>
        <div className='Basket'>Корзина</div>
        {/* <div className='Total'>{this.state.quantity} товар на сумму {this.state.sum} рублей.</div> */}
        <div className='LaptopProducts'>{productsSelected}</div>
        </div>
        }
        {
          this.state.selectedItem == 0 &&
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