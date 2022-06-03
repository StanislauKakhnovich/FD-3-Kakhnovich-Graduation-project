import React from 'react';
import PropTypes from 'prop-types';

class Basket extends React.PureComponent {

  static propTypes = {
    
  };

  render() {

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <div>Корзина</div>
      </div>
    );
  }
}

export default Basket;