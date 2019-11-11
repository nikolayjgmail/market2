import React, {Component} from 'react';

import "./filter.css"
import Slider from "../slider/slider";
import Color from "../color/color";

class Filter extends Component {
    state = {
        arr: [],
        sizeS: [],
        min: 0,
        max: 0,
    };

    render() {
        const {data, dataRender, clickCategories, clickColor} = this.props;
const{sizeS}=this.state

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


        let filteredArrColor = dataRender.reduce((acc, elem) => {
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


        dataRender.map((el) => {

            let test = el.size.split(",");
            this.state.arr.push(...test);

        });
        let min = Math.min(...this.state.arr)
        let max = Math.max(...this.state.arr)
        let sizes = [min, max];
        this.state.sizeS = sizes;

        // console.log(this.state.sizeS)


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
                    {console.log(this.state.sizeS)}
                    <Slider sizes={this.state.sizeS}/>
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