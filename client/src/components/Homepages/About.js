import React from "react";

function About() {
  return (
    <>
    <div className="main-container">
      <div className="container justify-content-center  about-info">
        <h2>About me</h2>
        <p>
          Passionate Coder, Full Stack Web Developer, Empathic Person <br />I am
          currently a student at P.E.S. Modern College of Engineering, Pune,
          pursuing an undergraduate degree in Computer Engineering. I am
          interested in Full Stack Web Developement , Artificial Intelligence ,
          Data Science and learnin new programming languages. I am always
          curious about things and enjoy learning. I am a detail orientated
          person and I keep my goals and tasks organized to maintain
          productivity. I believe that the skills that I have attained from the
          dynamic environment and competitive university life define me and I am
          looking forward to implementing and polishing them in any opportunity
          that I receive.
        </p>

        <a
          class="btn btn-light btn-lg about-btn text-light"
          href="https://www.linkedin.com/in/vaibhavpande2605/"
          target={"_blank"}
          role="button"
        >
          Read more »
        </a>
      </div>
      </div>
    </>
  );
}

export default About;