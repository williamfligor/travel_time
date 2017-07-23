/* globals google */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    withStyles,
    createStyleSheet,
} from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Card, {
    CardContent,
} from 'material-ui/Card';

import FormMapsKey from './FormMapsKey.js';
import FormPlaces from './FormPlaces.js';
import RouteDetails from './RouteDetails.js';

import ReactIgnore from './ReactIgnore.js';

import Settings from './Settings.js';

import 'typeface-roboto';


const styleSheet = createStyleSheet('Dashboard', (theme) => ({
    card: {
        width: '100%',
    },
    map: {
        width: '100%',
        height: '95vh',
    },
    root: {
        flexGrow: 1,
        padding: '20px',
        height: '95vh',
    },
    googleMap: {
        height: '100%',
        width: '100%',
        position: 'relative',
    }
}));

class Dashboard extends Component {
    constructor(props) {
        super(props);


        this.state = {
            apiKey: localStorage.getItem('mapsApikey') || '',
            origin: localStorage.getItem('origin') || '',
            destination: localStorage.getItem('destination') || '',
            stage: 0,
            routes: []
        };

        this.onApiKeySet = this.onApiKeySet.bind(this);
        this.onPlacesSet = this.onPlacesSet.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onReset() {
        this.setState({
            stage: 1
        });
    }

    onApiKeySet(apiKey) {
        this.setState({
            apiKey: apiKey,
            stage: this.state.stage + 1,
        });

        localStorage.setItem('mapsApikey', apiKey);

        var s = document.createElement( 'script' );
        s.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + apiKey);
        document.body.appendChild(s);
    }

    onPlacesSet(origin, destination) {
        this.setState({
            orogin: origin,
            destination: destination,
            stage: this.state.stage + 1,
        });

        localStorage.setItem('origin', origin);
        localStorage.setItem('destination', destination);

        if (!this.directionsRenderers) {
            this.directionsRenderers = [];
        }

        for (let renderer of this.directionsRenderers) {
            renderer.setMap(null);
        }

        this.directionsRenderers = [];

        if (!this.directionsService) {
            this.directionsService = new google.maps.DirectionsService();

            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {lat: 41.85, lng: -87.65},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            });
        }

        // Wait for rerender
        setTimeout(this.update.bind(this), 1000);

        if (!this.timer) {
            this.timer = setInterval(this.update.bind(this), Settings.timer * 1000);
        }
    }

    update() {
        this.directionsService.route({
            origin: this.state.origin,
            destination: this.state.destination,
            travelMode: 'DRIVING',
            provideRouteAlternatives: true,
            drivingOptions: {
                departureTime: new Date(),
            },
        }, (response, status) => {
            if (status === 'OK') {
                console.log('Updated route');

                if (this.refs.details) {
                    this.refs.details.resetTimer();
                }

                for (let i = 0; i < response.routes.length; i++) {
                    const renderer = new google.maps.DirectionsRenderer({
                        map: this.map,
                        directions: response,
                        routeIndex: i
                    });

                    this.directionsRenderers.push(renderer);
                }

                this.setState({
                    routes: response.routes
                });
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    render() {
        const {classes} = this.props;

        const content = [
            (
                <FormMapsKey 
                    apiKey={this.state.apiKey} 
                    onSubmit={this.onApiKeySet} />
            ),
            (
                <FormPlaces
                    origin={this.state.origin}
                    destination={this.state.destination}
                    onSubmit={this.onPlacesSet} />
            ),
            (
                <RouteDetails
                    ref="details"
                    onReset={this.onReset}
                    routes={this.state.routes} />
            )
        ][this.state.stage];

        return (
            <Grid container gutter={24} className={classes.root}>
                <Grid item xs={3}>
                    {content}
                </Grid>

                <Grid item xs>
                    <Card className={classes.map} raised>
                        <CardContent className={classes.map}>
                            <ReactIgnore 
                                childClass={classes.googleMap} 
                                childId="map" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Dashboard);
