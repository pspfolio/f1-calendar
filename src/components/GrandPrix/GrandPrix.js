import React from 'react';

const GrandPrix = ({ grandPrix }) => (
    <div className="grand-prix">
        {grandPrix.map((gp) =>
                <h2>{gp.name}</h2>
        )}
    </div>
)

export default GrandPrix;
