import React, {Component} from 'react';
import "./good.css";
class Good extends Component {
    render() {
        const{pictures,price, dataId,clickGoods}=this.props;
        return (
            <div data-id={dataId} onClick={clickGoods} className={"good"}>
                <img data-id={dataId} src={pictures} alt=""/>
<div data-id={dataId} className={"shelf"}>
    <p data-id={dataId} >{price}</p>
</div>



            </div>
        );
    }
}

export default Good;