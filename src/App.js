import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./components/login/login";

const Error = () => {
    return (
        <div>
            <p>Error</p>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={login} exact />
                <Route component={Error} />
            </Switch>
            </BrowserRouter>
        );
    }
}

export default App;