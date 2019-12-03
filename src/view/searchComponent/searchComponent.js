import React, {Component} from 'react';
import Content from "../content/content";
import"./searchComponent.css"
class SearchComponent extends Component {
    render() {
        const{dataSearch}=this.props;
        console.log(dataSearch)

        return (
            <div className={"searchComponent"}>
                <Content data={dataSearch}/>
            </div>
        );
    }
}

export default SearchComponent;