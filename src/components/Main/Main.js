import React from 'react'
import Standings from '../../containers/Standings'
import './main.css'

const Main = React.createClass({
    render() {
        return(
          <div className='app'>
            <header>
              <h2><span className='light'>F1</span>2016</h2>
            </header>
            <div className="container">
              <Standings />
              <div className="gp-container">
                {React.cloneElement(this.props.children, this.props)}
              </div>
            </div>
          </div>
        )
    }
});

export default Main;
