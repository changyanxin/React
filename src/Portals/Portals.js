import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Portals extends Component {
    handleClick=()=>{
        console.log('PortalClick');
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div onClick={this.handleClick}>
                    <h1>Portal</h1>
                </div>,
                document.body
            )
        )
    }
}
