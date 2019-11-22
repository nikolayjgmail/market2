import React, {Component} from 'react';
import "./stars.css"
class Stars extends Component {
    render() {
        let {count} = this.props;
        const arr = [];
        for (let i = 0; i < 5; i++) {
            if (count != 0) {
                arr.push('http://localhost/image/star2.png');
                count--
            }
            else{
                arr.push('http://localhost/image/star.png');
            }
        }


        return (
            <div>
                {
arr.map((el,key)=>{
    return <img className={"star"} key={key} src={el} alt=""/>
})
                }
            </div>
        );
    }
}

export default Stars;