import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

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
import Footer from "./view/footer/footer";
import FirstScreen from "./view/firstScreen/firstScreen";

import Content from "./view/content/content";
import SearchComponent from "./view/searchComponent/searchComponent";


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

        dataSearch:[],

        activeFilter: false,
        dataRenderColor: [],
        dataRenderSizes: [],
        dataRender: [],
        dataRenderGender: [],
        activeGender: '',
        activeCategories: '',
        activeGoodsInfo: false,
        // activeBasket: false,
        basket: [],
    };

    // delDataSearch=()=>{
    //     if(this.state.dataSearch.length>0){
    //         this.setState({dataSearch:[]})
    //     }
    //
    // }
componentDidMount() {
    this.renewBasket()
}

renewBasket=()=>{
    if (JSON.parse(localStorage.getItem("dataBasket"))){
       this.setState({basket:JSON.parse(localStorage.getItem("dataBasket"))})
   }
}

    addBasket=(order)=>{
        let data=this.state.basket;
        data.push(order);
        this.setState({basket:data})
        localStorage.setItem("dataBasket", JSON.stringify(data))
           };



    search=(e)=>{

        let dat=e.target.value;
        if(dat.length!==0){
           if(document.querySelector(".firstScreenWrap")){
               document.querySelector(".firstScreenWrap").style.display="none"
           }

            fetch(`http://localhost/components/getSerch.php?data=${dat}`, {
                method: 'GET',
            })
                .then((res) => res.json())
                .then((res) => this.setState({dataSearch:res}));
        }
        else{
            if(document.querySelector(".firstScreenWrap")){
                document.querySelector(".firstScreenWrap").style.display="flex"
                this.setState({dataSearch:[]})
            }


        }



    }




    render() {

        const {renewBasket, delDataSearch,clickGender, clickCategories, clickColor, clickSizes, clickGoods, addBasket, search, clickBasket} = this;
        const{ dataSearch, dataRender, dataRenderSizes, dataRenderColor, activeGoodsInfo, basket, activeGender} = this.state;


        return (


            <Router>


                <div>

                    <div className={"mainWrap"}>

                        <header>
                            <Header search={search} data={basket.length} clickGender={clickGender} clickBasket={clickBasket}/>
                        </header>


                        {/*<section className={"filters"}>*/}
                        {/*    {*/}

                        {/*        dataRender.length!=0 && <Filter data={data} dataRender={dataRender}  dataRenderColor={dataRenderColor} dataRenderSizes={dataRenderSizes} clickSizes={clickSizes} clickCategories={clickCategories} clickColor={clickColor}/>*/}

                        {/*    }*/}


                        {/*</section>*/}


                        <section className={'content'}>

                            {
                                // console.log(dataSearch)
                            }

                            {

                                dataSearch.length!==0  &&  <SearchComponent dataSearch={dataSearch}/>

                            }

                            <Switch>

                                <Route path={"/"} exact component={FirstScreen}/>
                                <Route path={"/search"} exact component={FirstScreen}/>
                                <Route path="/basket" exact
                                       render={(props) => <BasketC basket={basket} renewBasket={renewBasket}   {...props} />}/>
                                <Route path={'/b=:id'} exact
                                       render={(props) => <GoodsInfo addBasket={addBasket}  {...props} />}/>
                                <Route path="/:gender" exact
                                       render={(props) => <GetGender delDataSearch={delDataSearch}
                                                                     dataRenderColor={dataRenderColor}
                                                                     dataRenderSizes={dataRenderSizes}
                                                                     clickSizes={clickSizes}
                                                                     clickCategories={clickCategories}
                                                                     clickColor={clickColor} {...props} />}/>
                                <Route path="/:gender/:val2" exact
                                       render={(props) => <GetGender  dataRender={dataRender}
                                                                     dataRenderColor={dataRenderColor}
                                                                     dataRenderSizes={dataRenderSizes}
                                                                     clickSizes={clickSizes}
                                                                     clickCategories={clickCategories}
                                                                     clickColor={clickColor} {...props} />}/>
                                <Route path="/:gender/:val2/:val3" exact
                                       render={(props) => <GetGender  dataRender={dataRender}
                                                                     dataRenderColor={dataRenderColor}
                                                                     dataRenderSizes={dataRenderSizes}
                                                                     clickSizes={clickSizes}
                                                                     clickCategories={clickCategories}
                                                                     clickColor={clickColor} {...props} />}/>
                                <Route path="/:gender/:val2/:val3/:val4" exact
                                       render={(props) => <GetGender  dataRender={dataRender}
                                                                     dataRenderColor={dataRenderColor}
                                                                     dataRenderSizes={dataRenderSizes}
                                                                     clickSizes={clickSizes}
                                                                     clickCategories={clickCategories}
                                                                     clickColor={clickColor} {...props} />}/>


                            </Switch>






                            {/*{*/}

                            {/*    dataRender.map((el, key) => {*/}

                            {/*        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} clickGoods={clickGoods}/>*/}
                            {/*    })*/}

                            {/*}*/}


                        </section>

                        <footer>

                            <Footer/>


                        </footer>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;