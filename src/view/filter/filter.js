import React, {Component} from 'react';

import "./filter.css"
import Slider from "../slider/slider";
import Color from "../color/color";
import Sizes from "../sizes/sizes";

class Filter extends Component {
    state = {

        arr: [],

    };


    render() {
        const {data, dataRender, dataRenderSizes, clickCategories, clickColor,clickSizes, dataRenderColor} = this.props;
// const{min,max}=this.state


        let filteredArrCat = data.reduce((acc, elem) => {
                if (acc.map[elem.categories]) // если данный город уже был
                    return acc; // ничего не делаем, возвращаем уже собранное

                acc.map[elem.categories] = true; // помечаем город, как обработанный
                acc.elems.push(elem); // добавляем объект в массив городов
                return acc; // возвращаем собранное
            },
            {
                map: {}, // здесь будут отмечаться обработанные города
                elems: [] // здесь конечный массив уникальных городов
            }).elems; // получаем конечный массив


        let filteredArrColor = dataRenderColor.reduce((acc, elem) => {
                if (acc.map[elem.color]) // если данный город уже был
                    return acc; // ничего не делаем, возвращаем уже собранное

                acc.map[elem.color] = true; // помечаем город, как обработанный
                acc.elems.push(elem); // добавляем объект в массив городов
                return acc; // возвращаем собранное
            },
            {
                map: {}, // здесь будут отмечаться обработанные города
                elems: [] // здесь конечный массив уникальных городов
            }).elems; // получаем конечный массив


        return (
            <div className={"filter"}>

                <div className={"type"}>
                    <p>TYPE:</p>
                    {
                        filteredArrCat.map((el, key) => <a data-id={el.categories} onClick={clickCategories} key={key}
                                                           href="#"><img data-id={el.categories} src={el.name}
                                                                         alt={el.categories}/></a>)
                    }
                </div>

                <div className={"separator"}></div>

                <div>
                    <Sizes dataRender={dataRender} clickSizes={clickSizes} dataRenderSizes={dataRenderSizes}/>
                    {/*<Slider dataRender={dataRender}  />*/}
                </div>
                <div className={"separator"}></div>
                <div className={"color"}>
                    <p>COLOR:</p>
                    {

                        filteredArrColor.map((el, key) => <Color key={key} color={el.color} dataId={el.color}
                                                                 clickColor={clickColor}/>)

                    }


                </div>
            </div>
        );
    }
}

export default Filter;