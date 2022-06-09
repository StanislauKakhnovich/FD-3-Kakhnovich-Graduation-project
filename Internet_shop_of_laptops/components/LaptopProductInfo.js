import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './LaptopProductInfo.css';

class int_LaptopProductInfo extends React.PureComponent {

  static propTypes = {
    
    sign: PropTypes.bool.isRequired, // получено из Redux
    info:PropTypes.shape({
      nameProduct: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  };

  state={
    limiter: false,
  }

  addProductInBasket =()=> {
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');

    if(this.props.sign&&!this.state.limiter) {
      this.setState({limiter:true});
      this.props.dispatch( { type:"ADD_PRODUCT_TO_BASKET", addProdact: this.props.info } );
    } 
  }


  render() {

    return (
      <div className='LaptopContainerInfo'>
        <div className="NameProductInfo">Ноутбук {this.props.info.nameProduct}</div>
        <div className='LaptopProduct'>
          <div className='ImageLaptopInfo'>
            <img src={`../images/${this.props.info.nameProduct.replace(/\s/g, '_')}.jpeg`}></img>
          </div>
          <div className='VerticalContainer'>
            <div className='ProductDescriptionInfo'>{this.props.info.description}</div>
            <div className='DetailedInfoProduct'>Код товара: {this.props.info.id}</div>
            <div className='DetailedInfoProduct'>Технология экрана: {this.props.info.screenTechnology}</div>
            <div className='DetailedInfoProduct'>Модель процессора: {this.props.info.processorModel}</div>
            <div className='DetailedInfoProduct'>Объем оперативной памяти: {this.props.info.RAM}</div>
            <div className='DetailedInfoProduct'>Конфигурация накопителя: {this.props.info.driveConfiguration}</div>
            <div className='DetailedInfoProduct'>Видеокарта: {this.props.info.videoСard}</div>
            <div className='DetailedInfoProduct'>Операционная система: {this.props.info.OS}</div>
            <div className='DetailedInfoProduct'>Назначение: {this.props.info.appointment}</div>
            <div className='ProductPriceInfo'>{this.props.info.price.toFixed(2)} руб</div>
            <button className='AddProductBasketInfo' onClick={this.addProductInBasket}>В корзину</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    sign: state.signIn.stateIn,
   };
};
    
const LaptopProductInfo = connect(mapStateToProps)(int_LaptopProductInfo);

export default LaptopProductInfo;
