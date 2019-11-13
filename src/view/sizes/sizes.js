import React, {Component} from 'react';
import "./sizes.css"
class Sizes extends Component {
    render() {
        const{dataRender,clickSizes}=this.props;

        let arr = [];
        this.props.dataRenderSizes.map((el) => {

            let test = el.size.split(",");
            arr.push(...test);
        });

        // let filteredArrSizes=[...new Set(arr)];
        let filteredArrSizes=[...new Set(arr)].sort((a,b)=>a-b);



        return (
            <div className={"sizes"}>
                <p>SIZE:</p>
                {
                    filteredArrSizes.map((elem,key)=>{

                        return <div  key={key} className={"size"}><a onClick={clickSizes} href="#">{elem}</a></div>
                    })
                }
            </div>
        );
    }
}

export default Sizes;