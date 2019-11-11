import React, {Component} from 'react';

import './App.css';
import Header from "./view/header/header";
import Filter from "./view/filter/filter";
import Good from "./view/good/good";

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
            .then((res) => this.setState({data: res, dataRender: res}));
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

    };

    clickColor =(e)=>{
        let val = e.target.getAttribute('data-id')
        let arr = this.state.dataRender.filter((el) => el.color === val.toLowerCase());
        this.setState({dataRender:arr})
    };

    render() {


        const {clickGender, clickCategories, clickColor} = this;
        const {data, activeFilter, activeGender, dataRender, dataRenderGender} = this.state;


        return (

            <div>

                <div className={"mainWrap"}>

                    <header>
                        <Header clickGender={clickGender}/>
                    </header>


                    <section className={"filters"}>
                        {

                            // activeGender && <Filter type={dataRenderGender} clickCategories={clickCategories}/>
                            activeFilter && <Filter data={data} dataRender={dataRender} clickCategories={clickCategories} clickColor={clickColor}/>

                        }


                    </section>

                    <section className={"goods"}>
                        {

                            dataRender.map((el, key) => {
                                return <Good key={key} pictures={el.pictures} price={el.price}/>
                            })

                        }


                    </section>

                    <footer>

                    </footer>

                </div>
            </div>
        );
    }
}

export default App;