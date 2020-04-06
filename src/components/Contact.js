import React from 'react';

export const Contact = ({ contact }) => {
  const { name, number } = contact;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {number}
      </div>
    </div>
  );
};
