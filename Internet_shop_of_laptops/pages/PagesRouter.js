import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page_About from './Page_About';
import Page_Company from './Page_Company';
import Page_Products from './Page_Products';
import Page_Product from './Page_Product';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Routes>
        <Route path="/" element={<Page_About/>} />
        <Route path="/company" element={<Page_Company/>} />
        <Route path="/products" element={<Page_Products/>} />
        <Route path="/product/:prid" element={<Page_Product/>} />
      </Routes>
    );
    
  }

}
    
export default PagesRouter;
    