import React, {Component} from 'react';
import Good from "../good/good";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import "./getGender.css"
import Pagination from "../pagination/pagination";
import Content from "../content/content";
import Filter from "../filter/filter";
import FirstScreen from "../firstScreen/firstScreen";
import BasketC from "../basketComonent/basketC";

class GetGender extends Component {
    state = {


        dataRender: [],
        dataSizeRender:[],
        dataColorRender:[],
        data: [],
    };




    get = () => {
        fetch(`http://localhost/components/getSome.php?data1=${this.props.match.params.gender}&data2=${this.props.match.params.val2}&data3=${this.props.match.params.val3}&data4=${this.props.match.params.val4}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({ dataRender:res, dataSizeRender:res, dataColorRender:res}));
    };

    getGender = () => {
        fetch(`http://localhost/components/getSome.php?data1=${this.props.match.params.gender}&data2=undefined&data3=undefined&data4=undefined`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({data: res}));
    };


    componentDidMount() {
        this.get()
        this.getGender()

    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.get();
            this.getGender();

        }
    }



    render() {

        const{data,dataRender,dataColorRender, dataSizeRender}=this.state
        const{delDataSearch}=this.props;

        return (
            <div className={"getGender"}>

                <Filter resIndex={0} data={data} dataRender={dataRender} dataRenderColor={dataColorRender}
                        dataRenderSizes={dataSizeRender}/>


                <Content data={dataRender}/>


                <Pagination/>


            </div>
        );
    }
}

export default GetGender;