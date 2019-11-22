import React, {Component} from 'react';
import "./good.css";
import {NavLink} from 'react-router-dom';
class Good extends Component {
    render() {
        const{pictures,price, dataId,clickGoods,gender}=this.props;

        return (
            <NavLink to={`/${gender}/${dataId}`}>
            <div data-id={dataId} onClick={clickGoods} className={"good"}>
                <img data-id={dataId} src={pictures} alt=""/>
<div data-id={dataId} className={"shelf"}>
    <p data-id={dataId} >{price}</p>
</div>



            </div>
            </NavLink>
        );
    }
}

export default Good;