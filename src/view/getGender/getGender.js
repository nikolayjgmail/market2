import React, {Component} from 'react';
import Good from "../good/good";

class GetGender extends Component {
    state = {
        data: [],
        prps:'',
    };



componentDidMount() {
    this.setState({prps: this.props.match.params.gender})
    fetch(`http://localhost/components/getTest.php?column=gender&data=${this.state.prps}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) => this.setState({data: res}));

}



 shouldComponentUpdate(nextProps, nextState, nextContext) {

     this.setState({prps:nextProps.match.params.gender})

       return  this.state.prps!==nextProps.match.params.gender






 }



         //         this.addBasket().then((res)=> {
         //                 this.setState({
         //                     id:nextProps,
         //                     basket:res
         //                 })
         //             }
 // }







    render() {
        console.log("props:", this.props.match.params.gender);
        console.log("state:", this.state.prps);


        const {data, prps} = this.state;





       // console.log(this.props.data)

        return (
            <div className={"goods"}>
                {
                    data.map((el, key)=> {
                        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} />
                    })
                    // this.props.data.map((el, key)=> {
                    //     return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} gender={el.gender} />
                    // })


                }





            </div>
        );
    }
}

export default GetGender;