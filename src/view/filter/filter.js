import React, {Component} from 'react';

import "./filter.css"
import Slider from "../slider/slider";
import Color from "../color/color";
import Sizes from "../sizes/sizes";
import Type from "./type";
import Colors from "./colors";

class Filter extends Component {
    state = {
        acpType:this.props.dataRender[0],

    };

    gettype=(val)=>{
        this.setState({acpType:val})
    };

//     if(this.props.dataRender[0]){
//     let  resItem=  dataRender[0].categories
//     this.setState({acpType:resItem})
// }


    render() {
        const { acpType,resIndex, dataProps, data, dataRender, dataRenderSizes, clickCategories, clickColor,clickSizes, dataRenderColor} = this.props;




        return (
            <div className={"filter"}>



                    <Type data={data} clickCategories={clickCategories}/>



                <div className={"separator"}></div>


                    <Sizes active={acpType} dataRender={dataRender}  dataRenderSizes={dataRenderSizes}/>


                <div className={"separator"}></div>


                    <Colors  dataRenderColor={dataRenderColor} clickColor={clickColor}  />




            </div>
        );
    }
}

export default Filter;