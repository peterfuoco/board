import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Insert Welcome message Here!</p>
      <div>
        <button>
          <Link
            style={{ textDecoration: "none", fontSize: "20px" }}
            to="/login"
          >
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}
