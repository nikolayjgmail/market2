import React, {Component} from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./slider.css"

class Slider extends Component {
    state = {
       index:0,


        slidesArr: ["http://localhost/image/slider/slid (1).jpg", "http://localhost/image/slider/slid (2).jpg", "http://localhost/image/slider/slid (3).jpg", "http://localhost/image/slider/slid (4).jpg",]
    }

componentDidMount() {
    setInterval(()=> this.next(), 3000)
    }


    next=()=>{
        if(this.state.index<this.state.slidesArr.length-1){
            this.setState({index:this.state.index+1})
        }
        else{
            this.setState({index:0})
        }
    };

    prev=()=>{
        if(this.state.index===0){
            this.setState({index:this.state.slidesArr.length-1})

        }
        else{
            this.setState({index:this.state.index-1})
        }
    };





    render() {

        const {slidesArr, index} = this.state;



        {;}


        return (

            <div className={"wrapSlider"}>
<div className={"btnSliderWrap"}>
    <img className={"prev"} onClick={this.prev} src="http://localhost/image/slider/prev.png" alt=""/>
    <img className={"next"} onClick={this.next} src="http://localhost/image/slider/next.png" alt=""/>
</div>

                {

                    <div className={"slid"}>
                        <img   src={slidesArr[index]} alt=""/>
                    </div>
                }


                {/*<div className={"slides"} style={{marginLeft:`-${index*100}%`}}>*/}
                    {/*{*/}
                    {/*    slidesArr.map((el, key) => {*/}
                    {/*        return <div className={"slid"} key={key}>*/}
                    {/*            <img   src={el} alt=""/>*/}
                    {/*        </div>*/}
                    {/*    })*/}
                    {/*}*/}
                {/*</div>*/}

            </div>

        );
    }
}

export default Slider;

