import React from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <p>yesssss</p>
        );
    }
}
