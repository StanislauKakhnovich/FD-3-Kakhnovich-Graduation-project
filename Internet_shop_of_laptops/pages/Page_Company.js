import React from 'react';

import LaptopCompany from '../components/LaptopCompany';

import productsArr from '../data/data.json';

class Page_Company extends React.PureComponent {
          
  render() {

    return (
      <LaptopCompany 
        products={productsArr}
      />
    );
    
  }

}
    
export default Page_Company;
    