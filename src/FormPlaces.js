import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Card, {
    CardActions, 
    CardHeader,
    CardContent,
} from 'material-ui/Card';

class FormPlaces extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Card>
                <CardHeader title="Places" />

                <CardContent>
                    <TextField 
                        inputRef={el => this.origin = el}
                        label="Origin"
                        defaultValue={this.props.origin} 
                        fullWidth />

                    <TextField 
                        inputRef={el => this.destination = el}
                        label="Destination"
                        defaultValue={this.props.destination}
                        fullWidth />
                </CardContent>

                <CardActions>
                    <Button onClick={this.onSubmit} dense> Submit </Button>
                </CardActions>
            </Card>
        );
    }

    onSubmit() {
        this.props.onSubmit(this.origin.value, this.destination.value);
    }
}

FormPlaces.propTypes = {
    origin: PropTypes.string,
    destination: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default FormPlaces;
