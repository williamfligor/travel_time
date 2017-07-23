import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import List, {
    ListItem,
    ListItemText 
} from 'material-ui/List';

import {
    LinearProgress 
} from 'material-ui/Progress';

import Card, {
    CardActions, 
    CardHeader,
    CardContent,
} from 'material-ui/Card';

import Settings from './Settings.js';

class RouteDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: Settings.timer
        };

        this.timer = setInterval(() => {
            if (this.state.timeLeft > 0) {
                this.setState({
                    timeLeft: this.state.timeLeft - 1
                });
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const routes = this.props.routes.map(route => {
            return (
                <ListItem key={'route-' + route.summary} button>
                    <ListItemText primary={route.summary} secondary={route.legs[0].duration_in_traffic.text} />
                </ListItem>
            )
        });

        return (
            <Card>
                <CardHeader title="Routes" />

                <CardContent>
                    <LinearProgress value={this.state.timeLeft / Settings.timer * 100} mode="determinate" />

                    <List>
                        {routes}
                    </List>
                </CardContent>

                <CardActions>
                    <Button onClick={this.props.onReset}>Reset</Button>
                </CardActions>
            </Card>
        );
    }

    resetTimer() {
        this.setState({
            timeLeft: Settings.timer
        });
    }
}

RouteDetails.propTypes = {
    routes: PropTypes.array.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default RouteDetails;
