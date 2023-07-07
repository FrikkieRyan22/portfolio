import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook , FaInstagram } from "react-icons/fa";
import "./styles.scss";
import MyPdf from '../../resume/Franco_Beukes_CV.pdf';

const Home = () => {
  function handleNavigateFacebook() {
    window.open(
      "https://www.facebook.com/franco.r.beukes"
    );
  }

  function handleNavigateInstagram() {
    window.open(
      "https://www.instagram.com/franco_met_n_f/"
    );
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Franco
          <br />
          Software Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="Franco_Beukes.pdf">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaFacebook onClick={handleNavigateFacebook} size={32} />
            <FaInstagram onClick={handleNavigateInstagram} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;