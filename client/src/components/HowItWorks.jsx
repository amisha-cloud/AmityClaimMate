import React from 'react';
import { FaFileAlt, FaSearch, FaHandHoldingHeart } from 'react-icons/fa';

function HowItWorks() {
  return (
    <section className="text-center py-5 bg-light">
      <h2 className="text-primary mb-4">How It Works</h2>
      <p className="text-muted">Three simple steps to reconnect with your lost items</p>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="d-flex justify-content-center mb-3">
            <FaFileAlt className="text-primary" size={80} />
          </div>
          <h5>Report a Lost Item</h5>
          <p>Upload item details including description, image, and location.</p>
        </div>

        <div className="col-md-4">
          <div className="d-flex justify-content-center mb-3">
            <FaSearch className="text-success" size={80} />
          </div>
          <h5>Search Found Items</h5>
          <p>Browse the database to see if someone has reported your item.</p>
        </div>

        <div className="col-md-4">
          <div className="d-flex justify-content-center mb-3">
            <FaHandHoldingHeart className="text-danger" size={80} />
          </div>
          <h5>Reclaim Your Item</h5>
          <p>Coordinate with admin to retrieve your item safely.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
