import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Front end developer</h3>
            <p>
              A driven and committed third-year software development student, I am deeply inspired by the possibilities of cloud computing and believe in its future potential. I find great satisfaction in creating and developing solutions that leverage the power of the cloud. My loyalty and honesty guide my interactions and commitments, and when faced with a challenge, I am relentless in my pursuit of answers.
              </p>
              <p>
              Outside of my professional interests, I enjoy immersing myself in different worlds through binge-watching shows and exploring new places through travel. These activities not only provide relaxation but also broaden my perspective and inspire creativity in my work.
              </p><p>
              When approaching problems, my strategy is to first gain a deep understanding of the issue at hand. I believe in learning the ins and outs of every challenge and tackling it step by step. This thorough and methodical approach ensures a solid foundation for problem-solving and results in well-thought-out solutions.


            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDatabase
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;