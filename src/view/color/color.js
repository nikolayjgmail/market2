import React, {Component} from 'react';
import "./color.css";
import {NavLink, Link} from 'react-router-dom';

class Color extends Component {
    state = {
        indexColor: 0,
    };

    indexingColor = () => {
        let ind = window.location.pathname.split('/').length
        this.setState({indexColor: ind})
    };

    arrC = (el) => {

        let arrC = window.location.pathname.split('/');

        arrC.splice(this.state.indexColor, 1, el)
        let arrFinal = arrC.join('/');

        return arrFinal;
    };

    onclick = () => {
        if (this.state.indexColor == 0) {
            this.indexingColor()
        }
    }


    render() {

        const {color, dataId} = this.props;
        const {indexColor} = this.state
        return (

            <div>
                <Link to={!indexColor ? `${window.location.pathname}/${color}` : this.arrC(color)}
                      onClick={this.onclick} data-id={dataId}>
                    <div data-id={dataId} className={"back"} style={{"background": color}}></div>
                </Link>
            </div>
        );
    }
}

export default Color;