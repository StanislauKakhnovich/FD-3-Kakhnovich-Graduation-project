import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import './LaptopProduct.css';

class int_LaptopProduct extends React.PureComponent {

  static propTypes = {
    sign: PropTypes.bool.isRequired, // получено из Redux
    user: PropTypes.object.isRequired, // получено из Redux
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameProduct: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  };

  state={
    limiter: false,
    quantity: 0,
  }

  incCounter = (EO) => {
    console.log(this.props.info.id)
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');
    if(this.props.sign) this.props.dispatch( { type:"INC_PRODUCT", incProduct: {...this.props.info} } );
  }

  decCounter = () => {
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');
    if(this.props.sign&&this.state.quantity) this.props.dispatch( { type:"DEC_PRODUCT", decProduct: {...this.props.info} } );
  }
  // &&this.props.info.quantity-1>0
  addProductInBasket =()=> {
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');
    if(this.props.sign&&!this.state.limiter) {
      this.setState({limiter:true});
      this.props.dispatch( { type:"ADD_PRODUCT_TO_BASKET", addProdact: this.props.info } );
    } 
  }
  // componentWillMount(){

  // }

  render() {
    console.log('render');
    
    if(this.props.sign) {
      let arr = JSON.parse(JSON.stringify(this.props.user.basketProducts)); //this.props.user.basketProducts;
      arr.forEach(elem=>{
        if(elem.id==this.props.info.id)  this.setState({quantity:elem.quantity});//qty=this.props.info.quantity;
      })
      }

    
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
          <div className='ProductPrice'>{this.props.info.price.toFixed(2)} руб</div>
            {/* <button className='AddProductBasket' onClick={this.addProductInBasket}>В корзину</button> */}
            <span className="PutBusket">добавить в корзину</span>
            <div className="CounterButton">
            <input type='button' value='-' onClick={this.decCounter} />
            <span className="CounterButtonValue">{this.state.quantity}</span>
            <input type='button' value='+' onClick={this.incCounter} />
          </div>
        </div>
      </div>
    );

  }

}


const mapStateToProps = function (state) {
  return {
    sign: state.signIn.stateIn,
    user: state.dataUser.infoUser,
   };
};
    
const LaptopProduct = connect(mapStateToProps)(int_LaptopProduct);

export default LaptopProduct;