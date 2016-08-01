import React from 'react';

const Navigation = React.createClass({
    render() {
        const { name, time } = this.props;
        return(
            <div className="nav-item" key={name}>
                <p className="grandprix-name">{name}</p>
                <time className="grandprix-time">{time}</time>
            </div>
        )
    }
});

export default Navigation;
