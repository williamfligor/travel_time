import React, { Component } from 'react';

class ReactIgnore extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className={this.props.childClass} id={this.props.childId}></div>
        );
    }
}


export default ReactIgnore;
