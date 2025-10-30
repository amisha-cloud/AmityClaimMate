import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css'; 

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.jpg" alt="Logo" height="40" className="me-2 rounded-circle" />
          <span className="fw-bold text-dark">AmityClaimMate</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/add-item')} to="/add-item">Add Item</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/login')} to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/register')} to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
