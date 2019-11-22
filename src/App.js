import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route,NavLink} from 'react-router-dom';

import './App.css';
import Header from "./view/header/header";
import Filter from "./view/filter/filter";
import Good from "./view/good/good";
import GetGender from "./view/getGender/getGender";
import GetGenderMen from "./view/testComponents/GetGenderMen";
import GetGenderWomen from "./view/testComponents/GetGenderWomen";
import GetGenderKids from "./view/testComponents/GetGenderKids";
import GoodsInfo from "./view/goodsInfo/goodsInfo";
import Shop from "./view/testRout/testRout";
import BasketC from "./view/basketComonent/basketC";



class App extends Component {

    /**
     * data - данные с базы
     * dataRenderGender -масив товаров по полу
     * dataRender - масив товаров для рендера
     * activeGender - активный пол
     * activeCategories - активная категория
     *
     * **/


    state = {
        data: [],
        activeFilter: false,
        dataRenderColor:[],
        dataRenderSizes:[],
        dataRender: [],
        dataRenderGender: [],
        activeGender: '',
        activeCategories: '',
        activeGoodsInfo: false,
        // activeBasket: false,
        basket:[],
    };

    addBasket=(order)=>{

        let data=this.state.basket;
        data.push(order);

        this.setState({basket:data})
        console.log(this.state.basket)
           };

// clickBasket=()=>{
// this.setState({activeBasket: true})
// };

    clickGender = (e) => {

        const val = e.target;
        const value = val.textContent.toLowerCase();
        fetch(`http://localhost/components/getTest.php?column=gender&data=${value}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({data: res, dataRender: res,dataRenderColor:res,dataRenderSizes:res}));
        this.setState({activeFilter: true});





        // this.setState({activeGender: val.textContent});
        // val.className = "active";
        // this.setState({dataRender: this.state.data})
        // this.setState({dataRenderGender: this.state.data})

    };


//     componentDidMount() {
//         fetch('http://localhost/components/get.php')
//             .then((res) => res.json())
//             .then((res) => this.setState({data: res}))
//     };
//
//
//     clickGender = (e) => {
//         const val = e.target;
//         this.setState({activeGender: val.textContent});
//         val.className = "active";
//         let arr = this.state.data.filter((el) => el.gender === val.textContent.toLowerCase());
//         this.setState({dataRender: arr})
//         this.setState({dataRenderGender: arr})
//     };

    clickCategories = (e) => {
        let cat = e.target.getAttribute("data-id");
        let arr = this.state.data.filter((el) => el.categories === cat.toLowerCase());
        this.setState({dataRender: arr});
        this.setState({dataRenderColor: arr});
        this.setState({dataRenderSizes:arr})
    };

    clickColor =(e)=>{
        let val = e.target.getAttribute('data-id');
        let arr = this.state.dataRenderColor.filter((el) => el.color === val.toLowerCase());
        this.setState({dataRender:arr});
        this.setState({dataRenderSizes:arr})
    };

    clickSizes=(e)=> {
        let val = e.target.textContent;

        let arr = this.state.dataRenderSizes.filter((el) => {
            return el.size.split(",").some((elem)=> elem===val)
        });
        this.setState({dataRender:arr});
        this.setState({dataRenderColor:arr});

        console.log(arr)
    };

    clickGoods=(e)=>{

// console.log(e.target.getAttribute("data-id"))

        // this.setState({activeGoodsInfo:true})

    };



    render() {




        const {clickGender, clickCategories, clickColor, clickSizes,clickGoods,addBasket,clickBasket} = this;
        const {data, dataRender, dataRenderSizes,dataRenderColor,activeGoodsInfo,basket,activeGender} = this.state;


        return (





            <Router>




            <div>

                <div className={"mainWrap"}>

                    <header>
                        <Header data={basket.length} clickGender={clickGender} clickBasket={clickBasket}/>
                    </header>


                    <section className={"filters"}>
                        {

                            dataRender.length!=0 && <Filter data={data} dataRender={dataRender}  dataRenderColor={dataRenderColor} dataRenderSizes={dataRenderSizes} clickSizes={clickSizes} clickCategories={clickCategories} clickColor={clickColor}/>

                        }


                    </section>




                    <section>


                        <Switch>
                            {/*<Route path="/men" exect render={(props) => <GetGenderMen clickGoods={clickGoods} {...props} />} />*/}
                            {/*<Route path="/women" exect render={(props) => <GetGenderWomen clickGoods={clickGoods} {...props} />} />*/}
                            {/*<Route path="/kids" exect render={(props) => <GetGenderKids clickGoods={clickGoods} {...props} />} />*/}


                            {/*<Route onClick={clickGender} path="/:gender"  exact render={(props) =><GetGender data={data}   {...props} />} />*/}
                            {/*<Route path="/:gender"  exact render={(props) =><TestGetWrap data={data}  test={''}  {...props} />} />*/}


                            {/*<Route path="/"  exact component={App} />*/}

                            {/*<Route path="/men"  exact component={GetGenderMen} />*/}
                            {/*<Route path="/women"  exact component={GetGenderWomen} />*/}
                            {/*<Route path="/kids"  exact component={GetGenderKids} />*/}

                            <Route path="/basket"  exact  render={(props) =><BasketC basket={basket}   {...props} />} />


                            {/*<Route path="/:gender"  exact component={Shop} />*/}
                            {/*<Route path={'/:gender/:id'} exect render={(props) =><GoodsInfo addBasket={addBasket}  {...props} />} />*/}
                            {/*<Route path={'/men/:id'}  component={GoodsInfo}/>*/}


                            <Route path={'/:gender'} exact component={GetGender}/>

                            <Route path={'/:gender/:id'} exect render={(props) =><GoodsInfo addBasket={addBasket}  {...props} />} />




                            {/*<Route path="/men"  component={GetGender} />*/}
                            {/*<Route path={'/women'} exact component={GetGender}/>*/}
                            {/*<Route path={'/kids'} exact component={GetGender}/>*/}
                        </Switch>
                        {/*{*/}

                        {/*    dataRender.map((el, key) => {*/}

                        {/*        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} clickGoods={clickGoods}/>*/}
                        {/*    })*/}

                        {/*}*/}




                    </section>

                    <footer>

                    </footer>

                </div>
            </div>
            </Router>
        );
    }
}

export default App;