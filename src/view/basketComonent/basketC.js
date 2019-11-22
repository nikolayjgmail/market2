import React, {Component} from 'react';
import "./basketC.css";
import {Link, NavLink} from "react-router-dom"
import Qty from "../qty/qty";

class BasketC extends Component {
    state = {
        data: [],
        basketGoodsRender: [],

    };


    componentDidMount() {

        this.setState({data: this.props.basket})
    }


    render() {
        const {basket} = this.props;
        const {data} = this.state;
        // console.log(data)

        let filteredArrBasket = basket.reduce((acc, elem) => {

                if (acc.map[elem.good.id]) {
                      // console.log(acc.elems);
                      // console.log(acc.map);
                    return acc;
                }
                else {
                    acc.map[elem.good.id] = true;
                    acc.elems.push(elem);
                    return acc;
                }
            },
            {
                map: {},
                elems: []

            }).elems;


        console.log(filteredArrBasket)

        return (
            <div className={"basketC"}>
                <NavLink to={`/`}>
                    <div className={"close"}><img src='http://localhost/image/cross.png' alt=""/></div>
                </NavLink>
                {
                    basket.length == 0 && <div className={"empty"}>
                        <h1>cart is empty</h1>
                        <Link to={"/"}>
                            <button>OK</button>
                        </Link>
                    </div>
                }

                {

                    basket.length > 0 && <div className={"basketGoods"}>
                        {
                            filteredArrBasket.map((el,key) => {
                                return <div key={key} className={"basketGood"}>
                                    <img src={el.good.pictures} style={{boxShadow: `0px 10px 10px -10px ${el.color}`}}
                                         alt=""/>
                                    <h3>SIZE: {el.size}</h3>
                                    <h3>NAME: {el.good.name}</h3>
                                    <h3>PRICE: {el.good.price}UAH</h3>
                                    <Qty cnt={el.qty}/>
                                    <div data-id={el.good.id} className={"deleteBasketGood"}><img data-id={el.good.id} src='http://localhost/image/cross.png'
                                                                             alt=""/></div>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default BasketC;