import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Card, {
    CardActions, 
    CardHeader,
    CardContent,
} from 'material-ui/Card';

class FormMapsKey extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Card>
                <CardHeader title="Google Maps API Key" />

                <CardContent>
                    <TextField
                        inputRef={el => this.apiKey = el}
                        defaultValue={this.props.apiKey}
                        fullWidth />
                </CardContent>

                <CardActions>
                    <Button onClick={this.onSubmit} dense> Submit </Button>
                </CardActions>
            </Card>
        );
    }

    onSubmit() {
        this.props.onSubmit(this.apiKey.value);
    }
}

FormMapsKey.propTypes = {
    apiKey: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

export default FormMapsKey;
