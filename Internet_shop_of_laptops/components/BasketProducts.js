import React from 'react';
import PropTypes from 'prop-types';

import BasketProduct from './BasketProduct';
import './BasketProducts.css';

class BasketProducts extends React.PureComponent {

  static propTypes = {
    
  };
  state = {
    quantity: 1,
    sum: 1000,
    selectedItem: [
      {"id":1,"nameProduct":"Lenovo IdeaPad 3 15ALC6 82KU00BXRE","description":"15.6\" 1920 x 1080 IPS, 60 Гц, несенсорный, AMD Ryzen 3 5300U 2600 МГц, 8 ГБ DDR4, SSD 256 ГБ, встроенная, без ОС, цвет крышки серый","price":1779,"screenTechnology":"IPS","processorModel":"AMD Ryzen 3 5300U 2600 МГц","RAM":"8 ГБ DDR4","driveConfiguration":"SSD 256 ГБ","videoСard":"встроенная","OS":"без ОС","appointment":"для учебы, для дома, для фильмов и интернета"},
      {"id":2,"nameProduct":"Lenovo Legion 5 15ACH6 82JW00MQRE","description":"15.6\" 1920 x 1080 IPS, 165 Гц, несенсорный, AMD Ryzen 7 5800H 3200 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта NVIDIA GeForce RTX 3050 Ti 4 ГБ, без ОС, цвет крышки темно-синий","price":3769,"screenTechnology":"IPS","processorModel":"AMD Ryzen 7 5800H","RAM":"16 ГБ DDR4","driveConfiguration":"SSD 512 ГБ","videoСard":"NVIDIA GeForce RTX 3050 Ti 4 ГБ","OS":"без ОС","appointment":"игровой, для дизайнера, для фотографа"}
    ],
  }

  render() {

    var productsSelected=this.state.selectedItem.map( product =>
      <BasketProduct key={product.id} info={product}  />
    );

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <div className='Basket'>Корзина</div>
        <div className='Total'>{this.state.quantity} товар на сумму {this.state.sum} рублей.</div>
        <div className='LaptopProducts'>{productsSelected}</div>
      </div>
    );
  }
}

export default BasketProducts;