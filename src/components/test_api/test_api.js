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
            url: 'https://1m0whmainf.execute-api.us-east-1.amazonaws.com/test-stage/test-resource?foo=test-de-call-api!',
        }).then(response => {
            this.setState({
                test: response.data.foo
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
