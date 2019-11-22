import React, {Component} from 'react';
import Color from "../color/color";

class Colors extends Component {
    render() {
        const{dataRenderColor, clickColor}=this.props;

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
            <div className={"color"}>

                <p>COLOR:</p>
                {

                    filteredArrColor.map((el, key) => <Color key={key} color={el.color} dataId={el.color}
                                                             clickColor={clickColor}/>)

                }
            </div>
        );
    }
}

export default Colors;