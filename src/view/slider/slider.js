import React, {Component} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./slider.css"
class Slider extends Component {
state={
    arr:[],
    minRender:0,
    maxRender:0,


};


//     static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps.Min!==prevState.minT){
//         return{minT: nextProps.Min}
//     }
//     else return null;
// };

udate(){
    this.state.arr=[];
    this.props.dataRender.map((el) => {

        let test = el.size.split(",");
        this.state.arr.push(...test);
    });

    let min = Math.min(...this.state.arr);
    let max = Math.max(...this.state.arr);
    // this.setState({minRender: min});
    // this.setState({maxRender: max});
    console.log(min,max)

}


    render() {
const{minRender, maxRender,}=this.state;
const{dataRender}=this.props;



// let min = minT;
// let max= maxT;







        const get=(e)=>{

            let low = document.querySelector('.noUi-handle-lower').getAttribute("aria-valuenow");
            let hi = document.querySelector('.noUi-handle-upper').getAttribute("aria-valuenow");

           let min = Math.round(low);
           let max = Math.round(hi);

            console.log(min,max)
            this.setState({minRender: min})
            this.setState({maxRender: max})
        };


// console.log(  document.querySelector('.noUi-tooltip') &&  document.querySelector('.noUi-tooltip').textContent)






        return (

            <div className={"wrap"} >


                <p>SIZE:</p>
                <p>{minRender}</p>
                {/*<p>{Math.round(document.querySelector('.noUi-tooltip') &&  document.querySelectorAll('.noUi-tooltip')[0].textContent)}</p>*/}
            <div onClick={get} className={"slider"}>
                <Nouislider  range={{ min: 0 , max: 1}} start={[0, 1] } step={1} tooltips/>
            </div>
                <p>{maxRender}</p>
                {/*<p>{Math.round(document.querySelector('.noUi-tooltip') &&  document.querySelectorAll('.noUi-tooltip')[1].textContent)}</p>*/}
            </div>

        );
    }
}

export default Slider;