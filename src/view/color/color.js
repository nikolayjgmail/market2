import React, {Component} from 'react';
import "./color.css";
class Color extends Component {
    render() {
        const{color, clickColor, dataId }=this.props;
        return (

            <div>
                <a onClick={clickColor} href="#"><div data-id={dataId} className={"back"} style={{"background" :color}}></div></a>
            </div>
        );
    }
}

export default Color;