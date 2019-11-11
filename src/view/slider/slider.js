import React, {Component} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./slider.css"
class Slider extends Component {
state={
    sizesRender:[34,46]
};





    geT=(e)=>{

        let low = document.querySelector('.noUi-handle-lower').getAttribute("aria-valuenow");
        let hi = document.querySelector('.noUi-handle-upper').getAttribute("aria-valuenow");
        let sliderData = [Math.round(low),Math.round(hi)];
        this.setState({sizesRender: sliderData})

};

    render() {
const{sizesRender}=this.state;
const{sizes}=this.props;

console.log(sizes)
        // sizeS[0]!=="infinity" && this.setState({sizesRender: this.props.sizeS})


        return (

            <div className={"wrap"} >
                <p>SIZE:</p>
                <p>{sizesRender[0]}</p>
            <div onClick={this.geT} className={"slider"}>
                <Nouislider  range={{ min: 34, max: 46 }} start={sizes } step={1} />
            </div>
                <p>{sizesRender[1]}</p>
            </div>

        );
    }
}

export default Slider;