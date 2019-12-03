import React, {Component} from 'react';
import "./good.css";
import {NavLink} from 'react-router-dom';
class Good extends Component {
    render() {
        const{pictures,price,name, dataId}=this.props;

        return (
            <NavLink to={`/b=${dataId}`}>
            <div data-id={dataId}  className={"good"}>
                <img data-id={dataId} src={pictures} alt=""/>
<div data-id={dataId} className={"shelf"}>
    <p data-id={dataId} >{name}</p>
    <p data-id={dataId} >{price} UAH</p>

</div>



            </div>
            </NavLink>
        );
    }
}

export default Good;