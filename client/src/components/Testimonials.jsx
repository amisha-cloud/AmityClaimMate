import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="text-center py-5 bg-light">
      <div className="container">
        <h2 className="text-primary mb-4">What Our Students Say</h2>
        <div className="row justify-content-center">

          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm border-0">
              <FaQuoteLeft className="text-primary fs-4 mb-2" />
              <FaUserCircle className="text-secondary mx-auto d-block" size={80} />
              <h6 className="mt-3 mb-1">David K. Kuria</h6>
              <p className="text-muted small mb-2">
                "Got my ID card back in a day. So grateful!"
              </p>
              <FaQuoteRight className="text-primary fs-5 mb-3" />
              <div className="text-warning">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm border-0">
              <FaQuoteLeft className="text-primary fs-4 mb-2" />
              <FaUserCircle className="text-secondary mx-auto d-block" size={80} />
              <h6 className="mt-3 mb-1">Priya Sharma</h6>
              <p className="text-muted small mb-2">
                "Lost my notebook during exams and this portal helped a lot!"
              </p>
              <FaQuoteRight className="text-primary fs-5 mb-3" />
              <div className="text-warning">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm border-0">
              <FaQuoteLeft className="text-primary fs-4 mb-2" />
              <FaUserCircle className="text-secondary mx-auto d-block" size={80} />
              <h6 className="mt-3 mb-1">Arjun Mehta</h6>
              <p className="text-muted small mb-2">
                "Simple, fast, and very helpful. Kudos to the developers!"
              </p>
              <FaQuoteRight className="text-primary fs-5 mb-3" />
              <div className="text-warning">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
