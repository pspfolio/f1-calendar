import React from 'react';

const Main = React.createClass({
    render() {
        return(
            <div>
                <nav>
                    <p>Navigation here</p>
                </nav>
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
});

export default Main;
