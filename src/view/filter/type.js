import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";

class Type extends Component {
state={
    indexType:0
};

    indexingType=()=>{
        let ind=window.location.pathname.split('/').length
        this.setState({indexType:ind})
    };


    arrT=(el)=>{
        let arrT = window.location.pathname.split('/')
        arrT.splice(this.state.indexType,1,el)
        let arrFinal= arrT.join('/');
        return arrFinal;
    };

    render() {
        const {data} = this.props;
        const {indexType} = this.state;

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
// console.log(window.location.pathname)
        return (
            <div className={"type"}>
                <p>TYPE:</p>

                {
                    filteredArrCat.map((el, key) => {
                        // return  <Link to={!indexType ? `${window.location.pathname}/${el.categories}` : this.arrT(el.categories)} data-id={el.categories} onClick={indexType===0 && this.indexingType} key={key}  ><img data-id={el.categories} src={el.imgUrl} alt={el.categories} /></Link>
                        return  <Link to={`/${el.gender}/${el.categories}`} data-id={el.categories}  key={key}  ><img data-id={el.categories} src={el.imgUrl} alt={el.categories} /></Link>
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