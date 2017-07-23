import React, { Component } from 'react';

import {
    MuiThemeProvider,
} from 'material-ui/styles';

import 'typeface-roboto';

import Dashboard from './Dashboard.js';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Dashboard />
            </MuiThemeProvider>
        );
    }
}

export default App;
