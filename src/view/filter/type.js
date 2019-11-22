import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";

class Type extends Component {


    render() {
        const {data, clickCategories} = this.props;

        let filteredArrCat = data.reduce((acc, elem) => {
                if (acc.map[elem.categories])
                    return acc;

                acc.map[elem.categories] = true;
                acc.elems.push(elem);
                return acc;
            },
            {
                map: {},
                elems: []
            }).elems;

        return (
            <div className={"type"}>
                <p>TYPE:</p>

                {
                    filteredArrCat.map((el, key) => {
                        return  <Link to={`/${el.gender}/t=${el.categories}`} data-id={el.categories} onClick={clickCategories} key={key}  ><img data-id={el.categories} src={el.imgUrl} alt={el.categories} /></Link>
                    })

                    // filteredArrCat.map((el, key) => <a data-id={el.categories} onClick={clickCategories} key={key}
                    //                                    href="#"><img data-id={el.categories} src={el.imgUrl}
                    //                                                  alt={el.categories}/></a>)
                }
            </div>
        );
    }
}

export default Type;