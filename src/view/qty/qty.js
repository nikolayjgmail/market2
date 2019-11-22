import React, {Component} from 'react';
import "./qty.css"

class Qty extends Component {
    state={
     count:this.props.cnt,
    };
    render() {
        const{count}=this.state;
       const up=()=>{
           this.setState({count: ++this.state.count})
       }
       const down=()=>{
           count>1 &&  this.setState({count: --this.state.count})
       }
        return (

            <div className={"qty"}>
                <h1 onClick={down} >-</h1>
                <h3 contentEditable={"true"} className={"qtyNumber"}>{count}</h3>
                <h1 onClick={up}>+</h1>
            </div>
        );
    }
}

export default Qty;