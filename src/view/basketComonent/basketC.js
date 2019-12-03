import React, {Component} from 'react';
import "./basketC.css";
import {Link, NavLink} from "react-router-dom"
import Qty from "../qty/qty";

class BasketC extends Component {
    state = {
        data: [],
        basketGoodsRender: [],
        filteredArr:[]

    };


getData=()=>{
    if (JSON.parse(localStorage.getItem("dataBasket"))) {
        return JSON.parse(localStorage.getItem("dataBasket"))

//
//         let gettedData = JSON.parse(localStorage.getItem("dataBasket"))
// console.log(gettedData)
//         return  gettedData.reduce((acc, elem) => {
//
//                 if (acc.map[elem.good.id]){
//
//                     let index= acc.elems.findIndex((el)=>{
//                         return el.good.id === elem.good.id
//                     });
//
//                     acc.elems[index].qty=acc.elems[index].qty+1
//
//                     return acc; // ничего не делаем, возвращаем уже собранное
//                 } // если данный город уже был
//                 else{
//                     acc.map[elem.good.id] = true; // помечаем город, как обработанный
//                     acc.elems.push(elem); // добавляем объект в массив городов
//                     return acc; // возвращаем собранное
//                 }
//
//             },
//             {
//                 map: {}, // здесь будут отмечаться обработанные города
//                 elems: [] // здесь конечный массив уникальных городов
//             }).elems; // получаем конечный массив
    }
};

setData=(data)=>{


    localStorage.setItem("dataBasket", JSON.stringify(data))
    this.setState({data:this.getData()})
    this.props.renewBasket()
}

    componentDidMount() {
      this.setState({data:this.getData()})
    }


    // componentDidUpdate(prevProps) {
    //     if (prevProps !== this.props) {
    //         this.setState({data: this.props.basket})
    //
    //     }
    // }


   del=(e)=>{
        let val=e.target.getAttribute("dataId")
       let dat=this.state.data
dat.splice(val,1)
//       let deleteData = this.state.data.filter((elem)=>{
// return elem.good.id!==val
//        });
this.setState({data:dat})
 this.setData(this.state.data)
    }

   total=()=>{
       let sum=0;
           this.state.data.map((elem)=>{
              sum=sum+elem.qty*elem.good.price

           })
       return sum
   }

   count=(e)=>{
    let element=e.target.nextSibling;
    console.log(element.textContent)

    // console.log(document.querySelectorAll(".qtyNumber")[0])

   };

order=()=>{
    let name=document.querySelector(".nameBasket");
    let phone=document.querySelector(".phoneBasket");

    if(!name.value || !phone.value){
        alert("no user data")
        // if(!name.value){
        //     name.style.border ="red solid 2px"
        // }
        // if(!phone.value){
        //     phone.style.border ="red solid 2px"
        // }

    }
    else{

        alert( `ORDERED!!!`)
        console.log(name.value, phone.value, this.state.data)

        localStorage.setItem("dataBasket", JSON.stringify([]))
        this.props.renewBasket()
    }
}


    render() {
// console.log(this.state.data)
const{count }=this
        const {basket} = this.props;
        const {data} = this.state;






const handleClick=(e)=>{

    this.del(e)
};



        return (
            <div className={"basketC"}>
                <NavLink to={`/`}>
                    <div className={"close"}><img src='http://localhost/image/cross.png' alt=""/></div>
                </NavLink>
                {
                    basket.length === 0 && <div className={"empty"}>
                        <h1>cart is empty</h1>
                        <Link to={"/"}>
                            <button>OK</button>
                        </Link>
                    </div>
                }

                {

                    basket.length > 0 && <div className={"basketGoods"}>
                        <div className={"onlyGoods"}>
                        {
                            data.map((el, index) => {
                                return <div key={index} className={"basketGood"}>
                                    <img src={el.good.pictures} style={{boxShadow: `0px 10px 10px -10px ${el.color}`}}
                                         alt=""/>
                                    <h3>SIZE: {el.size}</h3>
                                    <div className={"separator"}></div>
                                    <h3>NAME: {el.good.name}</h3>
                                    <div className={"separator"}></div>
                                    <h3>PRICE: {el.good.price}UAH</h3>
                                    <div className={"separator"}></div>
                                    {/*<Qty onclick={count} dataId={el.good.id} cnt={el.qty}/>*/}
                                    <div dataId={index} className={"deleteBasketGood"} onClick={handleClick}><img dataId={index}
                                                                                                  src='http://localhost/image/cross.png'
                                                                                                  alt=""/></div>
                                </div>
                            })
                        }
                        </div>
                        <div className={"customerData"}>

                            <div className={"nameBasketWrap"}>
                                <h3>NAME: </h3>
                                <input className={"nameBasket"}  type="text"/>
                            </div>

                            <div className={"phoneBasketWrap"}>
                                <h3>PHONE: </h3>
                                <input className={"phoneBasket"}  type="text"/>
                            </div>

                            <div className={"totalWrap"}>
                                <h3>TOTAL: {this.total()} UAH</h3>
                            </div>

<div className={"buttonBasketWrap"}>

                          <Link to={"/"}>  <button  onClick={this.order} className={"buttonBasket"}>ORDER</button> </Link>
</div>
                        </div>

                    </div>
                }




            </div>
        );
    }
}

export default BasketC;





