import React, {Component} from 'react';
import "./header.css"
import Search from "./search";
import User from "./user";
import Basket from "./basket";

class Header extends Component {
    render() {
        const {clickGender} = this.props;
        return (
            <div className={"header"}>

                <a href="#"><img src="http://localhost/image/logo.png" alt=""/></a>

                <nav className={"menu"}>
                    <ul>
                        <li ><a  href="#" className={"li"} onClick={clickGender}>MEN</a></li>
                        <li ><a href="#" className={"li"} onClick={clickGender}>WOMEN</a></li>
                        <li ><a href="#" className={"li"} onClick={clickGender}>KIDS</a></li>

                    </ul>
                </nav>

                <div className={"search"}>
                    <Search/>
                </div>
                <div className={"basket"}>
<Basket/>
                </div>
                <div className={"user"}>
<User/>
                </div>


            </div>
        );
    }
}

export default Header;