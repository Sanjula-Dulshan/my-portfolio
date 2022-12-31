import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";

import skillJs from "../pic/js.png";
import skillJava from "../pic/java.png";
import skillMySql from "../pic/mySql.png";
import skillMongoDb from "../pic/mongoDb.png";
import skillExpress from "../pic/express.png";
import skillReact from "../pic/react.png";
import skillNode from "../pic/node.png";
import skillAWS from "../pic/aws.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Sanjula Dulshan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I am third-year undergraduate student at SLIIT. I have gained
              academic theoretical and practical abilities, as well as An
              enthusiastic, organized with good interpersonal skills, an
              excellent team worker and keen to build upon my knowledge and
              continue to learn new skills within the industry. I am looking for
              an internship to enhance and augment my knowledge and skill base
              while continuing my studies.
            </p>

            <div className="hero_btn d_flex">
              {/* <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/sanjula.dulshan.37"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sanjula-dulshan-154329203/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div> */}
              <div className="col_1">
                <div className="heading" style={{ marginBottom: "0px" }}>
                  <h4>BEST SKILL ON</h4>
                </div>
                <div className="button">
                  <button className="btn_shadow">
                    <img src={skillMongoDb} alt="MongoDb" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillExpress} alt="Express js" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillReact} alt="React js" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillNode} alt="Node js" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillJs} alt="Java Script" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillJava} alt="Java" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skillMySql} alt="My SQL" />
                  </button>

                  <button className="btn_shadow">
                    <img src={skillAWS} alt="AWS" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="My SQL" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
