import React, {Component} from 'react';
import {Link} from "react-router-dom"
class Basket extends Component {
    render() {
        const{data,clickBasket}=this.props

        return (
            <div onClick={clickBasket} className={"basketWrap"}>
                <Link to={"/basket"}>
                <img src="http://localhost/image/basket.png" alt=""/>
                {
               data!=0 && <h3>{data}</h3>
                }
                </Link>
            </div>
        );
    }
}

export default Basket;