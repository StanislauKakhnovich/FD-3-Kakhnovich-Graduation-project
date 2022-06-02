import React from 'react';
import PropTypes from 'prop-types';

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
      <h1>
        товар &laquo;{this.props.info.nameProduct}&raquo;, описание {this.props.info.description}, цена {this.props.info.price}
      </h1>
    )
    ;

  }

}

export default LaptopProductInfo;
