import React from 'react';

const Navigation = React.createClass({
    renderNav(data) {
        return(
            <div className="nav" key={data.name}>
                <img src={data.imgSrc} alt={data.name} />
                <p>{data.name}</p>
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
