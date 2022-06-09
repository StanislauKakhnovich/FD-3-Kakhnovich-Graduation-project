import React from 'react';
import {useParams} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LaptopProductInfo from '../components/LaptopProductInfo';

const withRouter = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} /> ;
};

class int_Page_Product extends React.PureComponent {

  static propTypes = {
    products: PropTypes.array.isRequired, // получено из Redux
  };
          
  render() {
  
    let productId=parseInt(this.props.params.prid);

    let productData=this.props.products.find( product => product.id==productId );

    return (
      <div>
        <h1 className='NameCompany'>Интернет&ndash;магазин &laquo;Ноутбуки для всех&raquo;</h1>
        <LaptopProductInfo
          info={productData}
        />
      </div>
    );
  }

}
    


const mapStateToProps = function (state) {
  return {
    products: state.info.data,
   };
};
    
const Page_Product = connect(mapStateToProps)(int_Page_Product);

export default withRouter(Page_Product);
