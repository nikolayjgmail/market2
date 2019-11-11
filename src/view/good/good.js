import React, {Component} from 'react';
import "./good.css";
class Good extends Component {
    render() {
        const{pictures,price}=this.props;
        return (
            <div className={"good"}>
                <img src={pictures} alt=""/>
<div className={"shelf"}>
    <p>{price}</p>
</div>



            </div>
        );
    }
}

export default Good;