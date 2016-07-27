import React from 'react';
import Navigation from '../Navigation/Navigation';

const Main = React.createClass({
    render() {
        const data = [{imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045", name: "Spanish"}, {imgSrc: "http://vignette3.wikia.nocookie.net/rr3/images/e/e8/Circuit_Catalunya_2007.svg/revision/latest?cb=20160413121045", name: "Italian"} ];
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
