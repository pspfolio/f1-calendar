import React from 'react';
import NavigationList from '../NavigationList/NavigationList';

import './main.css';

const Main = React.createClass({
    render() {
        const data = [
            {
                time: '22 - 24 jul',
                name: 'Spanish'
            },
            {
                time: '22 - 24 oct',
                name: 'Italian'
            }
        ]
        return(
            <div className="container">
                <NavigationList className="nav" nav={data}/>
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
});

export default Main;
