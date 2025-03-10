import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white", // Fixed typo
  });

  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
        border: '1px solid white'
      });
      setbtntext("Enable Light Mode");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                facere commodi, perspiciatis provident nulla quas officiis
                illum! Fugit pariatur accusantium illum explicabo ducimus itaque
                minus nemo? Alias illum dolorem nam corrupti inventore ex
                laudantium!
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                asperiores minus repellat nostrum ducimus quod animi
                reprehenderit et, at nulla molestias ipsum doloremque eveniet,
                vitae impedit dicta voluptas consectetur totam a sequi porro
                commodi magnam labore. Earum, modi. Magnam minima saepe eum
                placeat id nobis unde explicabo necessitatibus eius quae!.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quae molestiae veritatis laboriosam doloribus corporis, deleniti
                natus totam beatae quam..
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}