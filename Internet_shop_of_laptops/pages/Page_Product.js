import React from 'react';
import {useParams} from "react-router-dom";

import LaptopProductInfo from '../components/LaptopProductInfo';

import productsArr from '../data/data.json';

// react-router v6 предоставляет возможности доступа к параметрам из УРЛа только в виде хуков, т.е. для функциональных компонентов
// эта HOF делает возможным использование этого react-router и с классовыми компонентами
const withRouter = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} /> ;
};

class Page_Product extends React.PureComponent {
          
  render() {

    //console.log(this.props);

    // раз написано <Route path="/client/:clid" element={<Page_Client/>} />
    // значит withRouter(Page_Client) получит то что в УРЛе после /client/ под именем props.params.clid в виде строки
    
    let productId=parseInt(this.props.params.prid);

    let productData=productsArr.find( product => product.id==productId );

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
    
export default withRouter(Page_Product);
