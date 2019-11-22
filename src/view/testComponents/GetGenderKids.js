import React, {Component} from 'react';
import Good from "../good/good";

class GetGenderKids extends Component {
    state={
        data:[]
    }

    componentDidMount() {
        fetch(`http://localhost/components/getTest.php?column=gender&data=kids`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({data: res}));
    }


    render() {
        const{data}=this.state
        return (
            <div className={"goods"}>
                {
                    data.map((el, key)=> {
                        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id}  gender={"kids"}/>
                    })
                }
            </div>
        );
    }
}

export default GetGenderKids;