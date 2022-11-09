import React from "react";

export default function Header() {
  return (
    <header className="container header">
      <h3>INSURE</h3>
      <ul className="header__nav">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/Reviews">Our Culture</a>
        </li>
        <li>
          <a href="/Our culture">Blog</a>
        </li>
        <li className="login">
          <a href="/">Log in</a>
        </li>
      </ul>
    </header>
  );
}
