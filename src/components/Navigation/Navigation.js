import React from 'react';
import './navigation.css';

const Navigation = ({ name, time, active }) => (
    <div className={active ? 'nav-item active' : 'nav-item'}>
        <p className="grandprix-name">{name}</p>
        <time className="grandprix-time">{time}</time>
    </div>
)

export default Navigation;
