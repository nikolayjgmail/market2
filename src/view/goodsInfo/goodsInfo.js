import React, {Component} from 'react';
import './goodsinfo.css'
import {NavLink} from 'react-router-dom';
import Qty from "../qty/qty";
import Stars from "../stars/stars";

class GoodsInfo extends Component {
    state = {
        data: [],
        order: {
            good: {},
            qty: 1,
            size: 0,
            color: null

        }
    };


    componentDidMount() {
        fetch(`http://localhost/components/getTest.php?column=id&data=${this.props.match.params.id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({data: res}));
    }

    setActiveColor = () => {
        this.state.order.color = this.state.data[0].colors.split(",")[0];
        let elColor = document.querySelector(".goodsInfoColor");
        elColor.classList.add('activeColor');

    };

    setActiveSize = () => {
        this.state.order.size = this.state.data[0].size.split(",")[0];
        let elSize = document.querySelector('.goodsInfoSize');
        elSize.classList.add("activeSize")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        this.state.data[0] && this.setActiveColor()
        this.state.data[0] && this.setActiveSize()
    }

    render() {

        const {data, order} = this.state;
        const {addBasket,} = this.props;

        const remActiveColor = () => {
            let all = document.querySelectorAll('.goodsInfoColor');
            all.forEach((el) => {
                el.classList.remove('activeColor')
            })
        }

        const remActiveSize = () => {
            let all = document.querySelectorAll('.goodsInfoSize');
            all.forEach((el) => {
                el.classList.remove('activeSize')
            })
        }

        const addColor = (e) => {
            let trg = e.target;
            remActiveColor();
            trg.classList.add('activeColor');
            this.state.order.color = trg.style.background

        }

        const addSize = (e) => {
            let trg = e.target;
            remActiveSize();
            trg.classList.add('activeSize');
            this.state.order.size = Number(trg.textContent)

        }


        const add = () => {
            let qty = document.querySelector(".qtyNumber").textContent;
            this.state.order.qty = Number(qty);
            this.state.order.good = data[0];
            addBasket(order)

        }


        return (

            <div>


                {

                    data[0] && <div className={'goodsInfoWrap'}>
                        <div className={"goodsInfoMain"}>
                            <NavLink to={`/${this.props.match.params.gender}`}>
                                <div className={"close"}><img src='http://localhost/image/cross.png' alt=""/></div>
                            </NavLink>
                            <div className={"imgWrap"}>
                                <img src={data[0].pictures} alt=""/>
                            </div>
                            <div className={"goodsInfoData"}>
                                <div>
                                    <div className={"goodsInfoDataHeader"}>
                                        <h1>{data[0].name.toUpperCase()}</h1>
                                        <div className={"stars"}>
                                            <Stars count={Number(data[0].stars)}/>

                                        </div>
                                    </div>

                                    <h1 className={'goodsInfoPrice'}>{data[0].price}₴</h1>

                                </div>
                                <div className={"description"}>
                                    <h2>DESCRIPTION</h2>
                                    <p>{data[0].about}</p>
                                </div>

                                <div className={"footerWrap"}>
                                    <div className={"goodsInfoColors"}>
                                        <h5>COLOR:</h5>

                                        {

                                            data[0].colors.split(",").map((el, key) => {
                                                return <div key={key} onClick={addColor} className={"goodsInfoColor"}
                                                            style={{background: el}}></div>
                                            })
                                        }

                                    </div>

                                    <div className={"separator"}></div>


                                    <div className={"goodsInfoSizes"}>
                                        <h5>SIZE:</h5>
                                        {
                                            data[0].size.split(",").map((el, key) => {
                                                return <h4 key={key} className={"goodsInfoSize"}
                                                           onClick={addSize}>{el}</h4>
                                            })
                                        }

                                    </div>

                                    <div className={"separator"}></div>

                                    <div className={"qty"}>
                                        <h5>QTY:</h5>
                                        <Qty cnt={1}/>
                                    </div>
                                </div>

                                <div className={"buttonWrap"}>
                                    <NavLink to={`/${this.props.match.params.gender}`}>
                                        <div onClick={add} className={"buttonBasket"}>
                                            <h5>ADD TO BASKET</h5>
                                        </div>
                                    </NavLink>
                                </div>


                            </div>
                        </div>
                    </div>
                }

            </div>

        );
    }
}

export default GoodsInfo;