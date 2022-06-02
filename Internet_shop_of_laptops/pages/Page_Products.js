import React from 'react';

import LaptopProducts from '../components/LaptopProducts';

import productsArr from '../data/data.json';

class Page_Products extends React.PureComponent {
          
  render() {

    return (
      <div>
        <h1>Интернет-магазин "Ноутбуки для всех"</h1>
        <LaptopProducts
        products={productsArr}
      />
      </div>
    );
    
  }

}
    
export default Page_Products;
    