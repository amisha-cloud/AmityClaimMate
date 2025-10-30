// src/components/ItemGrid.jsx

import React from 'react';

const items = [
  {
    id: 1,
    title: 'Found Wallet',
    description: 'Brown wallet found near library entrance.',
    image: '/wallet.jpg',
  },
  {
    id: 2,
    title: 'Lost Notebook',
    description: 'Left spiral notebook in Amity lab.',
    image: '/notebook.jpg',
  },
  {
    id: 3,
    title: 'Lost ID Card',
    description: 'Student ID card lost near cafeteria.',
    image: '/id-card.jpg',
  },
  {
    id: 4,
    title: 'Lost Water Bottle',
    description: 'Black steel bottle left in the seminar hall.',
    image: '/water_bottle.jpg',
  },
];

function ItemGrid() {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
          <div className="card h-100 shadow-sm border-0 hover-shadow">
            <img
              src={item.image}
              className="card-img-top"
              alt={item.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-sm btn-primary">Claim</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemGrid;
