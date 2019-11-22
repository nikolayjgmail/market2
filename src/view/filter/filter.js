import React, {Component} from 'react';

import "./filter.css"
import Slider from "../slider/slider";
import Color from "../color/color";
import Sizes from "../sizes/sizes";
import Type from "./type";
import Colors from "./colors";

class Filter extends Component {
    state = {

        arr: [],

    };


    render() {
        const {data, dataRender, dataRenderSizes, clickCategories, clickColor,clickSizes, dataRenderColor} = this.props;
// const{min,max}=this.state


        // let filteredArrCat = data.reduce((acc, elem) => {
        //         if (acc.map[elem.categories]) // если данный город уже был
        //             return acc; // ничего не делаем, возвращаем уже собранное
        //
        //         acc.map[elem.categories] = true; // помечаем город, как обработанный
        //         acc.elems.push(elem); // добавляем объект в массив городов
        //         return acc; // возвращаем собранное
        //     },
        //     {
        //         map: {}, // здесь будут отмечаться обработанные города
        //         elems: [] // здесь конечный массив уникальных городов
        //     }).elems; // получаем конечный массив



        return (
            <div className={"filter"}>



                    <Type data={data} clickCategories={clickCategories}/>



                <div className={"separator"}></div>


                    <Sizes dataRender={dataRender} clickSizes={clickSizes} dataRenderSizes={dataRenderSizes}/>


                <div className={"separator"}></div>


                    <Colors dataRenderColor={dataRenderColor} clickColor={clickColor}  />




            </div>
        );
    }
}

export default Filter;