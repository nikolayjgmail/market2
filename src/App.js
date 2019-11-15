import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from "./view/header/header";
import Filter from "./view/filter/filter";
import Good from "./view/good/good";
import GetGender from "./view/getGender/getGender";


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
    };


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

console.log(e.target.getAttribute("data-id"))
    };

    render() {


        const {clickGender, clickCategories, clickColor, clickSizes,clickGoods} = this;
        const {data, dataRender, dataRenderSizes,dataRenderColor,} = this.state;


        return (
            <Router>




            <div>

                <div className={"mainWrap"}>

                    <header>
                        <Header clickGender={clickGender}/>
                    </header>


                    <section className={"filters"}>
                        {

                            dataRender.length!=0 && <Filter data={data} dataRender={dataRender}  dataRenderColor={dataRenderColor} dataRenderSizes={dataRenderSizes} clickSizes={clickSizes} clickCategories={clickCategories} clickColor={clickColor}/>

                        }


                    </section>




                    <section>


                        <Switch>
                            {/*<Route path="/men" render={(props) => <GetGender text="men" {...props} />} />*/}
                            {/*<Route path="/women" render={(props) => <GetGender text="women" {...props} />} />*/}
                            {/*<Route path="/kids" render={(props) => <GetGender text="kids" {...props} />} />*/}


                            <Route path="/:gender"  exact component={GetGender} />


                            {/*<Route path="/men"  component={GetGender} />*/}
                            {/*<Route path={'/:id'} exact component={GetGender}/>*/}
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