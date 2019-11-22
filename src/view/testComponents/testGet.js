import React, {Component} from 'react';

class TestGet extends Component {
    state={
        data:[]
    }

    getData=()=>{
        fetch(`http://localhost/components/getTest.php?column=gender&data=${this.props.gender}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => this.setState({data: res}));
}

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    // console.log(this.state.data)
                    console.log(this.props.gender)
                }
            </div>
        );
    }
}

export default TestGet;