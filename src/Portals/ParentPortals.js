import React, { Component } from 'react'
import Portals from './Portals'

export default class ParentPortals extends Component {
    handleClick=()=>{
        console.log('ParentPortalClick');
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <Portals/>
            </div>
        )
    }
}
