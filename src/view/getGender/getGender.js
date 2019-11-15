import React, {Component} from 'react';
import Good from "../good/good";

class GetGender extends Component {
    state = {
        data: [],
        prps:this.props.match.params.gender,

    };


componentDidMount() {
    fetch(`http://localhost/components/getTest.php?column=gender&data=${this.state.prps}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) => this.setState({data: res}));
}






    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.match.params.gender!==prevState.prps){
    //
    //         // return{prps: nextProps.match.params.gender}
    //         //
    //         console.log("weqeqweqw")
    //     }
    //     else return null;
    // };


// componentDidMount() {
//     console.log("didmount!!!")
// }

// shouldComponentUpdate(nextProps, nextState, nextContext) {
//     // console.log("should")
//     fetch(`http://localhost/components/getTest.php?column=gender&data=${this.props.match.params.gender}`, {
//                 method: 'GET',
//             })
//                 .then((res) => res.json())
//                 .then((res) => this.setState({data: res}));
//
//
// }







    render() {
        console.log(this.state.data)
        console.log(this.props.match.params.gender)

        const {data, prps} = this.state;




       // console.log(this.props.match.params.gender)

        return (
            <div className={"goods"}>
                {
                    data.map((el, key)=> {
                        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} />
                    })


                }





            </div>
        );
    }
}

export default GetGender;