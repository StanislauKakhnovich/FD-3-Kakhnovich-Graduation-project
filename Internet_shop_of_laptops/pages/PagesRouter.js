import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import $ from 'jquery';

import Page_Company from './Page_Company';
import Page_Products from './Page_Products';
import Page_Product from './Page_Product';
import Page_Sign_Up from './Page_Sign_Up';
import Page_Sign_In from './Page_Sign_In';
import Page_Basket from './Page_Basket';
import Page_Contacts from './Page_Contacts';

import './PagesRouter.css';


class int_PagesRouter extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    products: PropTypes.array.isRequired, // получено из Redux
   };
  
  state = {
    dataReady: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData =()=> {
     if (this.props.products.length==0) {
      $.ajax(
        {
            url : "https://fe.it-academy.by/AjaxStringStorage2.php", type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : 'KAKHNOVICH_FD3_DATABASE_LAPTOPS' },
            success : this.readReady, error : this.errorHandler
        }
    );
     }
  }
  
   readReady=(callresult)=> {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
      this.setState({dataReady:true});
        var info=JSON.parse(callresult.result);
        this.props.dispatch( { type:"DATABASE_SUCCESS", dataBase: info } );
    }
  }
  
  errorHandler=(jqXHR,statusStr,errorStr)=> {
    alert(statusStr+' '+errorStr);
  }
          
  render() {
    if ( !this.state.dataReady )
      return <div id="preloader" className="hidden" aria-busy='true' aria-label='Загрузка данных, пожалуйста подождите.' role={'progressbar'}>
        <img className="LaptopPreloader" src={`../images/Apple_MacBook_Pro_16_2019_MVVJ2.jpeg`} title="Laptop"></img>
        </div>
      

    return (
        <Routes>
          <Route path="/" element={<Page_Company/>} />
          <Route path="/products" element={<Page_Products/>} />
          <Route path="/product/:prid" element={<Page_Product/>} />
          <Route path="/sign_up" element={<Page_Sign_Up/>} />
          <Route path="/sign_in" element={<Page_Sign_In/>} />
          <Route path="/basket" element={<Page_Basket/>} />
          <Route path="/contacts" element={<Page_Contacts/>} />
        </Routes>    
    );
  }
}
    


const mapStateToProps = function (state) {
  return {
    products: state.info.data,
   }; 
};

const PagesRouter = connect(mapStateToProps)(int_PagesRouter);

export default PagesRouter;
    