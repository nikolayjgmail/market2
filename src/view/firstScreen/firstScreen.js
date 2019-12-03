import React, {Component} from 'react';
import "./firstScreen.css"
import Slider from "../slider/slider";
class FirstScreen extends Component {
    render() {
        return (
            <div className={"firstScreenWrap"}>
<Slider/>
            </div>
        );
    }
}

export default FirstScreen;