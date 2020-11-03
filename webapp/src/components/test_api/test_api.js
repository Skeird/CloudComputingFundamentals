import React from 'react';
import axios from 'axios';

export default class Test_api extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            test: "nop"
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            headers: { 
                'Content-Type': 'application/json'
            },
            url: 'https://k9wwepp62a.execute-api.us-east-1.amazonaws.com/Prod/hello?foo=bar',
        }).then(response => {
            this.setState({
                test: response.data .foo
            })
        }).catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                {this.state.test}
            </div>
        );
    }
}
