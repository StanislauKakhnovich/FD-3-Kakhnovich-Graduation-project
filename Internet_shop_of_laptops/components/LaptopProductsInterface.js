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
    asus: {"nameProduct": "Asus"},
    products: this.props.products,
    controls: [],
    conformity: {
      '4': (elem)=>{return /Apple/.test(elem.nameProduct)},
      '5': (elem)=>{return /ASUS/.test(elem.nameProduct)},
      '6': (elem)=>{return /Lenovo/.test(elem.nameProduct)},
      '7': (elem)=>{return /HP/.test(elem.nameProduct)},
      '8': (elem)=>{return /HONOR/.test(elem.nameProduct)},
      '9': (elem)=>{return /Xiaomi/.test(elem.nameProduct)},
      '10': (elem)=>{return /Huawei/.test(elem.nameProduct)}
    }

  }

  filterSide = () => {
    this.setState( {filter:false} );
  }
  closeFilterSide = () => {
    this.setState( {filter:true} );
  }

  changedControls = (check1, value1) =>{
    let arr=[...this.state.controls];
    if(check1) {
      arr=[...arr, value1]
      console.log(arr)
    } 
    
    else if (!check1) {
      arr=arr.filter(control => control !== value1)
      console.log(arr)
    } 
    this.setState( {controls:  arr});
    console.log(this.state.controls)
  }


  choice = (EO) => {
    if(EO.target.checked) {
      let arr=[...this.state.controls];
      arr=[...arr, EO.target.value]
      this.setState( {controls:  arr});
    } 
    
    else if (!EO.target.checked) {
      let arr=[...this.state.controls];
      arr=arr.filter(control => control !== EO.target.value)
      this.setState( {controls: arr} );
    } 
  }


  filterClick =() =>{
      if (this.state.controls.length==0) {
        this.setState( {products: this.props.products});
      }
      else {
        let arr = [...this.props.products];
        let arr1= arr.filter(elem=>{
        return this.state.controls.some(control=>{
          return this.state.conformity[control](elem)
        })
      })
      this.setState( {products: arr1});
    }
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
                <input className='LeftRadio' type='checkbox' name='producer' value={4} onClick={this.choice}/><span className='LeftVariant'>Apple</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={5} onClick={this.choice}/><span className='LeftVariant'>Asus</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={6} onClick={this.choice}/><span className='LeftVariant'>Lenovo</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={7} onClick={this.choice}/><span className='LeftVariant'>HP</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={8} onClick={this.choice}/><span className='LeftVariant'>HONOR</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={9} onClick={this.choice}/><span className='LeftVariant'>Xiaomi</span><br/>
                <input className='LeftRadio' type='checkbox' name='producer' value={10} onClick={this.choice}/><span className='LeftVariant'>Huawei</span>
              </div>
              <div className='Appointment'>
              
                <div className='SideNameFilter'>Назначение:</div>
                <input className='LeftRadio' type='checkbox' name='appointment' value={11}/><span className='LeftVariant'>для учебы</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={12}/><span className='LeftVariant'>для дома</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={13}/><span className='LeftVariant'>игровой</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={14}/><span className='LeftVariant'>для программирования</span><br/>
                <input className='LeftRadio' type='checkbox' name='appointment' value={15}/><span className='LeftVariant'>компактный</span>
              </div>
              <div className='SkreenDiagonal'>
                <div className='SideNameFilter'>Диагональ экрана:</div>
                <input className='LeftRadio' type='checkbox' name='skreen' value={16}/><span className='LeftVariant'>менее 13&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={17}/><span className='LeftVariant'>13 &ndash; 14&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={18}/><span className='LeftVariant'>15 &ndash; 16&rdquo;</span><br/>
                <input className='LeftRadio' type='checkbox' name='skreen' value={19}/><span className='LeftVariant'>17&rdquo;</span><br/>
              </div>
              <div className='Ram'>
                <div className='SideNameFilter'>Оперативная память:</div>
                <input className='LeftRadio' type='checkbox' name='ram' value={20}/><span className='LeftVariant'>от 8 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='ram' value={21}/><span className='LeftVariant'>от 16 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='ram' value={22}/><span className='LeftVariant'>от 32 ГБ</span><br/>
              </div>
              <div className='HddSdd'>
                <div className='SideNameFilter'>Емкость накопителя:</div>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={23}/><span className='LeftVariant'>от 256 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={24}/><span className='LeftVariant'>от 512 ГБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={25}/><span className='LeftVariant'>от 1 ТБ</span><br/>
                <input className='LeftRadio' type='checkbox' name='hddsdd' value={26}/><span className='LeftVariant'>от 2 ТБ</span><br/>
              </div>
              <div className='Os'>
                <div className='SideNameFilter'>Операционная система:</div>
                <input className='LeftRadio' type='checkbox' name='os' value={27}/><span className='LeftVariant'>Windows 11</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={28}/><span className='LeftVariant'>Windows 10</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={29}/><span className='LeftVariant'>Linux</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={30}/><span className='LeftVariant'>Mac OS</span><br/>
                <input className='LeftRadio' type='checkbox' name='os' value={31}/><span className='LeftVariant'>Без ОС</span>
              </div>
              <button className='Filters' onClick={this.filterClick}>Применить фильтр</button>
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

