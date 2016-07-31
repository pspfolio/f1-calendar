import React from 'react';

import './navigation.css';

const Navigation = React.createClass({
    renderNav(data) {
        return(
            <div className="nav-item" key={data.name}>
                <p className="grandprix-name">{data.name}</p>
                <time className="grandprix-time">{data.time}</time>
            </div>
        )
    },

    render() {
        const { nav } = this.props;
        return(
            <nav className="nav">
                {nav.map(this.renderNav)}
            </nav>
        )
    }
});

export default Navigation;
