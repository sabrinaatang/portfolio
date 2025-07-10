import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar({ scrollTargetRef }) {
  const location = useLocation();
  const navigate = useNavigate();

  let variant = "default";
  if (location.pathname === "/") {
    variant = "portfolio";
  } else if (location.pathname.startsWith("/blog")) {
    variant = "blog";
  } else if (location.pathname.startsWith("/about")) {
    variant = "about";
  } else if (location.pathname.startsWith("/photography")) {
    variant = "photography";
  }

  const handlePortfolioClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      if (scrollTargetRef?.current) {
        scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the Portfolio page
      navigate("/");
    }
  };

  return (
    <div className={`bar bar-${variant}`}>
      <div className="brand">
        <Link to="/">SABRINA TANG</Link>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={handlePortfolioClick}>Work</a>
          </li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/photography">Photography</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
