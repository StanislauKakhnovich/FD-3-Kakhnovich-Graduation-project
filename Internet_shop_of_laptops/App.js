import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
import Footer from './pages/Footer';

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks/>
      <PagesRouter/>
      <Footer/>
    </div>
  </BrowserRouter>
, document.getElementById('container') );
