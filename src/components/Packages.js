import React from "react";

export default function Packages() {
  return (
    <section className="packages">
      <div className="container">
        <h3>PACKAGES</h3>
        <p>An overview of exciting insurance packages we offer</p>
        <div className="cards">
          <div>
            <h4>Health</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry and uses Latin words combined with a handful of model
              words.
            </p>
          </div>
          <div>
            <h4>Travel</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry and uses Latin words combined with a handful of model
              words.
            </p>
          </div>
          <div>
            <h4>Life</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry and uses Latin words combined with a handful of model
              words.
            </p>
          </div>
        </div>
        <a href="/" className="explore">
          Click here to explore {">>>"}
        </a>
      </div>
    </section>
  );
}
