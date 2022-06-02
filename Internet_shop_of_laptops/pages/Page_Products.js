import React from 'react';

import LaptopProducts from '../components/LaptopProducts';

import productsArr from '../data/data.json';

class Page_Products extends React.PureComponent {
          
  render() {

    return (
      <LaptopProducts
        products={productsArr}
      />
    );
    
  }

}
    
export default Page_Products;
    