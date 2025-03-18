import React from 'react';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <h3>{destination.name}</h3>
      <p><strong>Location:</strong> {destination.location}</p>
      <p>{destination.description}</p>
      <p><strong>Price:</strong> {destination.price}</p>
    </div>
  );
}

export default DestinationCard;