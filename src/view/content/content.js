import React, {Component} from 'react';
import "./content.css"
import Good from "../good/good";
class Content extends Component {
    render() {
        const{data}=this.props;
        return (
            <div className={"goods"}>

                   {
                       data.map((el, key)=> {
                        return <Good key={key} pictures={el.pictures} price={el.price} dataId={el.id} name={el.name} />
                    })
                   }
            </div>
        );
    }
}

export default Content;