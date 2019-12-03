import React, {Component} from 'react';
import {Link} from "react-router-dom";
class Search extends Component {
    render() {
        const{search}=this.props
        return (
            <div>
              <Link to={"/search"}> <input onChange={search} className={"search"} type="text" placeholder={"SEARCH"}/></Link>
            </div>
        );
    }
}

export default Search;