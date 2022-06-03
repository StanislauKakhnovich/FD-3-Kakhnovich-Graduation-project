import React from 'react';
import PropTypes from 'prop-types';

import './LaptopProductInfo.css';

class LaptopProductInfo extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      nameProduct: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  };

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
            <button className='AddProductBasketInfo'>В корзину</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LaptopProductInfo;
