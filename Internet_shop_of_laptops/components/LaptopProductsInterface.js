import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import LaptopProducts from './LaptopProducts';


import './LaptopProductsInterface.css';

class int_LaptopProductsInterface extends React.PureComponent {

  static propTypes = {
    products: PropTypes.array.isRequired, // получено из Redux
  };
  
  state = {
    filter: true,
    products: this.props.products,
    checkedReset: false,
    controls: [],
    filterKeys: {
      undefined: (elem)=>{return true},
      '4': (elem)=>{return /Apple/.test(elem.nameProduct)},
      '5': (elem)=>{return /ASUS/.test(elem.nameProduct)},
      '6': (elem)=>{return /Lenovo/.test(elem.nameProduct)},
      '7': (elem)=>{return /HP/.test(elem.nameProduct)},
      '8': (elem)=>{return /HONOR/.test(elem.nameProduct)},
      '9': (elem)=>{return /Xiaomi/.test(elem.nameProduct)},
      '10': (elem)=>{return /Huawei/.test(elem.nameProduct)},
      '11': (elem)=>{return /для учебы/.test(elem.appointment)},
      '12': (elem)=>{return /для дома/.test(elem.appointment)},
      '13': (elem)=>{return /игровой/.test(elem.appointment)},
      '14': (elem)=>{return /для программирования/.test(elem.appointment)},
      '15': (elem)=>{return /компактный/.test(elem.appointment)},
      '16': (elem)=>{return elem.description.match( /\d\d\.\d/)[0]<13},
      '17': (elem)=>{return elem.description.match( /\d\d\.\d/)[0]>13&&elem.description.match( /\d\d\.\d/)[0]<14},
      '18': (elem)=>{return elem.description.match( /\d\d\.\d/)[0]>15&&elem.description.match( /\d\d\.\d/)[0]<16},
      '19': (elem)=>{return elem.description.match( /\d\d\.\d/)[0]>17},
      '20': (elem)=>{return elem.RAM.match( /\d+/)[0]>=8},
      '21': (elem)=>{return elem.RAM.match( /\d+/)[0]>=16},
      '22': (elem)=>{return elem.RAM.match( /\d+/)[0]>=32},
      '23': (elem)=>{return elem.driveConfiguration.match( /\d+/)[0]>=256},
      '24': (elem)=>{return elem.driveConfiguration.match( /\d+/)[0]>=512},
      '25': (elem)=>{return elem.driveConfiguration.match( /\d+/)[0]>=1000},
      '27': (elem)=>{return /Windows 11/.test(elem.OS)},
      '28': (elem)=>{return /Windows 10/.test(elem.OS)},
      '29': (elem)=>{return /Linux/.test(elem.OS)},
      '30': (elem)=>{return /Mac OS/.test(elem.OS)},
      '31': (elem)=>{return /без ОС/.test(elem.OS)},
    }

  }

  filterSide = () => {
    this.setState( {filter:false} );
  }
  closeFilterSide = () => {
    this.setState( {filter:true} );
  }



  choice = (EO) => {
      let arr=[...this.state.controls];
      if(EO.target.value>3&&EO.target.value<11) arr[0]=EO.target.value;
      if(EO.target.value>=11&&EO.target.value<16) arr[1]=EO.target.value;
      if(EO.target.value>=16&&EO.target.value<20) arr[2]=EO.target.value;
      if(EO.target.value>=20&&EO.target.value<23) arr[3]=EO.target.value;
      if(EO.target.value>=23&&EO.target.value<26) arr[4]=EO.target.value;
      if(EO.target.value>=27&&EO.target.value<=31) arr[5]=EO.target.value;
      this.setState( {controls:  arr});
  }


  filterClick =() =>{
      if (this.state.controls.length==0) {
        this.setState( {products: this.props.products});
      }
      else {
        let arr = [...this.props.products];
        let arr1= arr.filter(elem=>{
        return this.state.controls.every(control=>{return this.state.filterKeys[control](elem)})
      })
      this.setState( {products: arr1});
    }
  }

  filterReset =() =>{
    let arr = [];
    this.setState( {controls:  arr});
    this.setState( {products: this.props.products});
  }


  render() {

    console.log("LaptopProductsIntrface render");

    return (
        <div className='ContainerProducts'>
          <div className='TopPanel'>
            <button className='AllProduct'>Вывести весь список</button>
            <button className='TenProduct'>Выводить по 10 товаров</button>
            <button className='NextTenProduct'>Следующие 10 товаров</button>
            <button className='Filters' onClick={this.filterSide}>Фильтры</button>
          </div>
          <div className={this.state.filter?'Hidden':'SidePanelFilters'}>
                {
                  !this.state.filter&&
                  <button className='CloseFilters' onClick={this.closeFilterSide}>Закрыть панель фильтров</button>
                }
                {
                  !this.state.filter&&
                  <div className="SideNameFilter">Фильтры</div>
                }
            <select className='FilterPrice' name='typePrice'>
                <option value={1}>Сначала популярные</option>
                <option value={2}>Сначала дешевые</option>
                <option value={3}>Сначала дорогие</option>
            </select>
              <div className='Producer'>
                <div className='SideNameFilter'>Производитель:</div>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '4'} value={4} onClick={this.choice}/><span className='LeftVariant'>Apple</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '5'} value={5} onClick={this.choice}/><span className='LeftVariant'>Asus</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '6'} value={6} onClick={this.choice}/><span className='LeftVariant'>Lenovo</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '7'} value={7} onClick={this.choice}/><span className='LeftVariant'>HP</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '8'} value={8} onClick={this.choice}/><span className='LeftVariant'>HONOR</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '9'} value={9} onClick={this.choice}/><span className='LeftVariant'>Xiaomi</span><br/>
                <input className='LeftRadio' type='radio' name='producer' checked={this.state.controls[0] == '10'} value={10} onClick={this.choice}/><span className='LeftVariant'>Huawei</span>
              </div>
              <div className='Appointment'>
              
                <div className='SideNameFilter'>Назначение:</div>
                <input className='LeftRadio' type='radio' name='appointment' checked={this.state.controls[1] == '11'} value={11} onClick={this.choice}/><span className='LeftVariant'>для учебы</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' checked={this.state.controls[1] == '12'} value={12} onClick={this.choice}/><span className='LeftVariant'>для дома</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' checked={this.state.controls[1] == '13'} value={13} onClick={this.choice}/><span className='LeftVariant'>игровой</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' checked={this.state.controls[1] == '14'} value={14} onClick={this.choice}/><span className='LeftVariant'>для программирования</span><br/>
                <input className='LeftRadio' type='radio' name='appointment' checked={this.state.controls[1] == '15'} value={15} onClick={this.choice}/><span className='LeftVariant'>компактный</span>
              </div>
              <div className='SkreenDiagonal'>
                <div className='SideNameFilter'>Диагональ экрана:</div>
                <input className='LeftRadio' type='radio' name='skreen' checked={this.state.controls[2] == '16'} value={16} onClick={this.choice}/><span className='LeftVariant'>менее 13&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' checked={this.state.controls[2] == '17'} value={17} onClick={this.choice}/><span className='LeftVariant'>13 &ndash; 14&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' checked={this.state.controls[2] == '18'} value={18} onClick={this.choice}/><span className='LeftVariant'>15 &ndash; 16&rdquo;</span><br/>
                <input className='LeftRadio' type='radio' name='skreen' checked={this.state.controls[2] == '19'} value={19} onClick={this.choice}/><span className='LeftVariant'>более 17&rdquo;</span><br/>
              </div>
              <div className='Ram'>
                <div className='SideNameFilter'>Оперативная память:</div>
                <input className='LeftRadio' type='radio' name='ram' checked={this.state.controls[3] == '20'} value={20} onClick={this.choice}/><span className='LeftVariant'>от 8 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='ram' checked={this.state.controls[3] == '21'} value={21} onClick={this.choice}/><span className='LeftVariant'>от 16 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='ram' checked={this.state.controls[3] == '22'} value={22} onClick={this.choice}/><span className='LeftVariant'>от 32 ГБ</span><br/>
              </div>
              <div className='HddSdd'>
                <div className='SideNameFilter'>Емкость накопителя:</div>
                <input className='LeftRadio' type='radio' name='hddsdd' checked={this.state.controls[4] == '23'} onClick={this.choice} value={23}/><span className='LeftVariant'>от 256 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='hddsdd' checked={this.state.controls[4] == '24'} onClick={this.choice} value={24}/><span className='LeftVariant'>от 512 ГБ</span><br/>
                <input className='LeftRadio' type='radio' name='hddsdd' checked={this.state.controls[4] == '25'} onClick={this.choice} value={25}/><span className='LeftVariant'>от 1000 ГБ</span><br/>
              </div>
              <div className='Os'>
                <div className='SideNameFilter'>Операционная система:</div>
                <input className='LeftRadio' type='radio' name='os' checked={this.state.controls[5] == '27'} onClick={this.choice} value={27}/><span className='LeftVariant'>Windows 11</span><br/>
                <input className='LeftRadio' type='radio' name='os' checked={this.state.controls[5] == '28'} onClick={this.choice} value={28}/><span className='LeftVariant'>Windows 10</span><br/>
                <input className='LeftRadio' type='radio' name='os' checked={this.state.controls[5] == '29'} onClick={this.choice} value={29}/><span className='LeftVariant'>Linux</span><br/>
                <input className='LeftRadio' type='radio' name='os' checked={this.state.controls[5] == '30'} onClick={this.choice} value={30}/><span className='LeftVariant'>Mac OS</span><br/>
                <input className='LeftRadio' type='radio' name='os' checked={this.state.controls[5] == '31'} onClick={this.choice} value={31}/><span className='LeftVariant'>Без ОС</span>
              </div>
              <div>
                <button className='Filters' onClick={this.filterClick}>Применить фильтр</button>
              </div>
              <div>
                <button className='Filters' onClick={this.filterReset}>Сбросить фильтр</button>
              </div>
              
          </div>
          <LaptopProducts products={this.state.products}/>
          <div className='BottomPanel'>
            <button className='NextTenProduct'>Следующие 10 товаров</button>
          </div>
        </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.info.data,
   };
};
    
const LaptopProductsInterface = connect(mapStateToProps)(int_LaptopProductsInterface);

export default LaptopProductsInterface;

