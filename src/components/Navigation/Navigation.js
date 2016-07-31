import React from 'react';

const Navigation = React.createClass({
    renderNav(data) {
        return(
            <div className="nav" key={data.name}>
                <p className="grandprix-name">{data.name}</p>
                <time className="grandprix-time">{data.time}</time>
            </div>
        )
    },

    render() {
        const { nav } = this.props;
        return(
            <nav>
                {nav.map(this.renderNav)}
            </nav>
        )
    }
});

export default Navigation;
