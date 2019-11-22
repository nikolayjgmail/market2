import React, {Component} from 'react';
import Good from "../good/good";

class GetGenderMen extends Component {
    state={
        data:[]
    }

    componentDidMount() {
    fetch(`http://localhost/components/getTest.php?column=gender&data=men`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) => this.setState({data: res}));
}



    render() {
        const{data, clickGoods}=this.state
        return (
            <div className={"goods"}>
                {
                    data.map((el, key)=> {
                        return <Good key={key}   pictures={el.pictures} price={el.price} dataId={el.id} clickGoods={clickGoods} gender={"men"} />
                    })
                }
            </div>
        );
    }
}

export default GetGenderMen;