import React, {Component} from 'react';
import TestGet from "./testGet";

class TestGetWrap extends Component {
state={
    dataTest: this.props.match.params.gender
}

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.match.params.gender!==prevState.dataTest){

            return{dataTest: nextProps.match.params.gender}

        }
        else return null;
    };

    render() {

        return (
            <div>
                {
                    console.log(this.state.dataTest)
                }
                {/*{*/}
                {/*    // console.log("test", this.props.test)*/}
                {/*    console.log("test", this.props.match.params.gender)*/}
                {/*}*/}
                {/*<TestGet gender={this.state.dataTest}/>*/}
            </div>
        );
    }
}

export default TestGetWrap;