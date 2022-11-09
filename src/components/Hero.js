import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="container hero__body">
        <h1>Get Insurance Policy and Save 30%!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry and uses Latin words combined with a handful of model words.
        </p>
        <a href="/" className="signup">
          Get Started
        </a>
      </div>
    </section>
  );
}
