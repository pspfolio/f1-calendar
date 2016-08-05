import React from 'react';
import './navigation.css';

const Navigation = ({name, time}) => (
    <div className="nav-item" key={name}>
        <p className="grandprix-name">{name}</p>
        <time className="grandprix-time">{time}</time>
    </div>
)

export default Navigation;
