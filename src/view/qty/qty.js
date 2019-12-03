import React, {Component} from 'react';
import "./qty.css"

class Qty extends Component {
    state={
     count:this.props.cnt,
    };
    render() {
        const{count}=this.state;
        const{dataId,onclick}=this.props;
       const up=()=>{
           this.setState({count: ++this.state.count})
       }
       const down=()=>{
           count>1 &&  this.setState({count: --this.state.count})
       }
        return (

            <div onClick={onclick} className={"qty"}>
                <h1 dataId={dataId} onClick={down} >-</h1>
                <input dataId={dataId} className={"qtyNumber"} type="text" value={count} />
                {/*<h3 dataId={dataId} contentEditable={"true"} className={"qtyNumber"}>{count}</h3>*/}
                <h1 dataId={dataId} onClick={up}>+</h1>
            </div>
        );
    }
}

export default Qty;