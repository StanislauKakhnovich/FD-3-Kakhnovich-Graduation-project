import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './LaptopProductInfo.css';

class int_LaptopProductInfo extends React.PureComponent {

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
  }

  incCounter = (EO) => {
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');
    if(this.props.sign) this.props.dispatch( { type:"INC_PRODUCT", incProduct: {...this.props.info} } );
  }

  decCounter = () => {
    let qty=0;
    if(this.props.sign) {
      let arr =this.props.user.basketProducts;
      arr.forEach(elem=>{
        if(elem.id==this.props.info.id)  qty=elem.quantity; 
      })
    }
    if(!this.props.sign) alert('Вы не зарегистрированы. Пройдите авторизацию или регистрацию.');
    if(this.props.sign&&qty) this.props.dispatch( { type:"DEC_PRODUCT", decProduct: {...this.props.info} } );
  }

  render() {
    let qty=0;
    if(this.props.sign) {
      let arr =this.props.user.basketProducts;
      arr.forEach(elem=>{
        if(elem.id==this.props.info.id)  qty=elem.quantity; 
      })
    }


    return (
      <div className='LaptopContainerInfo'>
        <div className="NameProductInfo">Ноутбук {this.props.info.nameProduct}</div>
        <div className='LaptopProduct'>
          <div className='ImageLaptopInfo'>
            <img src={`../images_1/${this.props.info.nameProduct.replace(/\s/g, '_')}.jpeg`}></img>
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
            <div>
              <span className="PutBusket">добавить в корзину</span>
              <div className="CounterButton">
              <input type='button' value='-' onClick={this.decCounter} />
              <span className="CounterButtonValue">{qty}</span>
              <input type='button' value='+' onClick={this.incCounter} />
            </div>
            </div>
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
    
const LaptopProductInfo = connect(mapStateToProps)(int_LaptopProductInfo);

export default LaptopProductInfo;
