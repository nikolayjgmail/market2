import React, {Component} from 'react';
import "./color.css";
import {NavLink,Link} from 'react-router-dom';
class Color extends Component {
    render() {
        const{color, clickColor, dataId }=this.props;
        return (

            <div>
                <Link to={`?c=${color}`} data-id={dataId} onClick={clickColor} ><div data-id={dataId} className={"back"} style={{"background" :color}}></div></Link>
            </div>
        );
    }
}

export default Color;