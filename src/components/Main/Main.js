import React from 'react';
import Navigation from '../Navigation/Navigation';

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
            <div>
                <Navigation nav={data}/>
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
});

export default Main;
