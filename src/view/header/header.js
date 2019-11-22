import React, {Component} from 'react';
import "./header.css"
import Search from "./search";
import User from "./user";
import Basket from "./basket";
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {

        const {clickGender, data,clickBasket} = this.props;

        return (

            <div className={"header"}>
                <Link to={'/'}><img src="http://localhost/image/logo.png" alt=""/></Link>


                <nav className={"menu"}>
                    <ul>


                        <NavLink to={"/men/"}>
                            <li>< p className={"li"} onClick={clickGender}>MEN</p></li>
                        </NavLink>
                        <NavLink to={"/women"}>
                            <li><p className={"li"} onClick={clickGender}>WOMEN</p></li>
                        </NavLink>
                        <NavLink to={"/kids"}>
                            <li><p className={"li"} onClick={clickGender}>KIDS</p></li>
                        </NavLink>

                    </ul>
                </nav>

                <div className={"search"}>
                    <Search/>
                </div>
                <div className={"basket"}>
                    <Basket clickBasket={clickBasket} data={data}/>
                </div>
                <div className={"user"}>
                    <User/>
                </div>


            </div>

        );
    }
}

export default Header;