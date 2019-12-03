import React, {Component} from 'react';
import "./sizes.css"
import {NavLink, Link} from 'react-router-dom';

class Sizes extends Component {
    state = {
        indexSize: 0
    };



    indexingSize = () => {
        let ind = window.location.pathname.split('/').length
        this.setState({indexSize: ind})
    };


    arrS = (el) => {
        let arrS = window.location.pathname.split('/');
        arrS.splice(this.state.indexSize, 1, el);
        let arrFinal = arrS.join('/');
        return arrFinal
    }

    onclick=()=>{
        if(window.location.pathname.split('/').length<2){
            this.setState({indexSize:0})
        }

        if(this.state.indexSize===0){this.indexingSize()}
    }

    render() {


        const {dataRenderSizes} = this.props;
        const {indexSize} = this.state;

        let arr = [];
        dataRenderSizes.map((el) => {

            let test = el.size.split(",");
            arr.push(...test);
        });


        let filteredArrSizes = [...new Set(arr)].sort((a, b) => a - b);


        return (
            <div className={"sizes"}>
                <p>SIZE:</p>
                {
                    filteredArrSizes.map((elem, key) => {

                        return <div key={key} className={"size"}><Link
                            to={!indexSize ? `${window.location.pathname}/${elem}` : this.arrS(elem)}
                            onClick={this.onclick}>{elem}</Link></div>
                    })
                }
            </div>
        );
    }
}

export default Sizes;