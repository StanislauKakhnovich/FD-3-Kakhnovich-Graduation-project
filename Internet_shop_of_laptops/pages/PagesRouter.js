import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_Company from './Page_Company';
import Page_Products from './Page_Products';
import Page_Product from './Page_Product';
import Page_Sign_Up from './Page_Sign_Up';
import Page_Sign_In from './Page_Sign_In';
import Page_Contacts from './Page_Contacts';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Routes>
        <Route path="/" element={<Page_Company/>} />
        <Route path="/products" element={<Page_Products/>} />
        <Route path="/product/:prid" element={<Page_Product/>} />
        <Route path="/sign_up" element={<Page_Sign_Up/>} />
        <Route path="/sign_in" element={<Page_Sign_In/>} />
        <Route path="/contacts" element={<Page_Contacts/>} />
      </Routes>
    );
    
  }

}
    
export default PagesRouter;
    