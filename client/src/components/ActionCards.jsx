import { FaBoxOpen, FaSearch, FaEye } from "react-icons/fa";

function ActionCards() {
  return (
    <section className="text-center py-5">
      <h2 className="text-primary">What Would You Like to Do?</h2>
      <p className="text-muted">Choose from the options below</p>

      <div className="row mt-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-4">
            <FaBoxOpen className="text-primary mb-3" size={50} />
            <h5 className="mt-2">Report Found Items</h5>
            <p>Submit details and images of found items.</p>
            <button className="btn btn-outline-primary">I Found Something</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-4">
            <FaSearch className="text-warning mb-3" size={50} />
            <h5 className="mt-2">Submit A Lost Item Search Form</h5>
            <p>We’ll notify you if a match is found.</p>
            <button className="btn btn-outline-warning">I Can't Find My Item</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-4">
            <FaEye className="text-success mb-3" size={50} />
            <h5 className="mt-2">Look for Lost Items</h5>
            <p>Search by description or image of the item.</p>
            <button className="btn btn-outline-success">I Lost Something</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionCards;
