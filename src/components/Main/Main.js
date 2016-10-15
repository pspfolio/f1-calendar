import React from 'react';
import NavigationList from '../../containers/NavigationList';
import './main.css';

const Main = React.createClass({
    render() {
        return(
          <div className='app'>
            <header>
              <h2><span className='light'>F1</span>2016</h2>
            </header>
            <div className="container">
                <NavigationList className="nav" {...this.props}/>
                <div className="gp-container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
          </div>
        )
    }
});

export default Main;
