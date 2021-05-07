import React from 'react';

export const Location = React.memo(() => {
    const handleClickMap = () => {
        window.open('https://goo.gl/maps/XkoCP9FdpzKGYFE37', '_blank');
    };

    return (
        <div 
            className="location"
            onClick={ handleClickMap }
        >
            <i className="fas fa-map-marked-alt"></i>
            <br />
            Hacienda San Sebastián, Kilómetro 3, vía El Rosal - Subachoque
        </div>
    );
});
