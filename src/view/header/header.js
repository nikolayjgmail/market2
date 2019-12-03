import React, {Component} from 'react';
import "./header.css"
import Search from "./search";
import User from "./user";
import Basket from "./basket";
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    render() {

        const {clickGender, data, search} = this.props;

        return (

            <div className={"header"}>
                <Link className={"logo"} to={'/'}><img  src="http://localhost/image/logo.png" alt=""/></Link>


                <nav className={"menu"}>
                    <ul>



                            <li> <NavLink className={"el"} to={"/men"}>MEN</NavLink> </li>

                        <div className={"separator"}></div>

                            <li>  <NavLink className={"el"} to={"/women"}>  <p className={"li"} onClick={clickGender}>WOMEN</p>  </NavLink>  </li>

                        <div className={"separator"}></div>

                            <li> <NavLink className={"el"} to={"/kids"}>  <p className={"li"} onClick={clickGender}>KIDS</p>  </NavLink>  </li>


                    </ul>
                </nav>

                <div className={"search"}>
                    <Search search={search}/>
                </div>
                <div className={"basket"}>
                    <Basket  data={data}/>
                </div>
            </div>

        );
    }
}

export default Header;