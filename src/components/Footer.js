import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <form className="form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
        <p>
          Powered by <span>INSURE</span>. Copyright &copy; 2022
        </p>
      </div>
    </footer>
  );
}
