import React, {Component} from 'react';
import {Link} from "react-router-dom"
class Basket extends Component {
    //  count=()=>{
    //     let cnt=0;
    //     this.props.data.map((elem)=>{
    //         cnt = elem.qty+cnt;
    //     })
    //     return cnt
    //
    // }

    render() {
        const{data}=this.props;

        return (
            <div>
            <Link to={"/basket"}>
            <div  className={"basketWrap"}>

                    {
                        data!=0 && <div className={"h3Wrap"}><h4>{data}</h4></div>
                    }
                <img src="http://localhost/image/basket.png" alt=""/>


            </div>
                </Link>
            </div>
        );
    }
}

export default Basket;