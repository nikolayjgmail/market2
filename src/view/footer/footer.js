import React, {Component} from 'react';
import './footer.css'
import {NavLink, Link} from 'react-router-dom';

class Footer extends Component {
    render() {

        return (
            <div className={"footerWrap"}>
                <div className={"footer"}>
                    <div className={'footerContent'}>

                        <div className={"footerContentWrap"}>
                        <div className={"men"}>

                            <Link to={"/men"}> <h3>MEN</h3> </Link>
                           <Link to={"/men/botinki"}> <h5>botinki</h5> </Link>
                           <Link to={"/men/flip-flop"} > <h5>flip-flop</h5> </Link>
                           <Link to={"/men/kedi"} > <h5>kedi</h5> </Link>
                           <Link to={"/men/oksford"} > <h5>oksford</h5> </Link>

                        </div>
                        <div className={"separator"}></div>
                        <div className={"women"}>

                            <Link to={"/women"}> <h3>WOMEN</h3> </Link>
                                <Link to={"/women/bosonojki"}> <h5>bosonojki</h5> </Link>
                                    <Link to={"/women/botilion"}> <h5>botilion</h5> </Link>
                                        <Link to={"/women/kedi"}> <h5>kedi</h5> </Link>
                                            <Link to={"/women/lodochki"}> <h5>lodochki</h5> </Link>

                        </div>

                        <div className={"separator"}></div>

                        <div className={"kids"}>

                            <Link to={"/kids"}> <h3>KIDS</h3> </Link>
                                <Link to={"/kids/bosonojki"}> <h5>bosonojki</h5> </Link>
                                    <Link to={"/kids/botinki"}> <h5>botinki</h5> </Link>
                                        <Link to={"/kids/kedi"}> <h5>kedi</h5> </Link>
                                            <Link to={"/kids/sapogi"}> <h5>sapogi</h5> </Link>

                        </div>
                            <div className={"separator"}></div>

                            <div className={"social"}>
                                <a href="https://www.facebook.com/"><img src="http://localhost/image/icon/facebook.png" alt=""/> FACEBOOK</a>
                                <a href="https://www.instagram.com/"><img src="http://localhost/image/icon/instagram.png" alt=""/> INSTAGRAM</a>
                                <a href="https://vk.com/"><img src="http://localhost/image/icon/vk.png" alt=""/> VK</a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;