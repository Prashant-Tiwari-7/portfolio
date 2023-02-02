import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { 
   motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue } from "framer-motion"
import { Container, Row, Col } from "react-bootstrap";
import styles from "./about.module.scss";
const About = () => {
  return (
    <div className={`${styles.aboutDv}`}>
      <Container fluid className="h-100">
            <Row className="h-100">
              <Col md="6">
                <div className={`text-white mx-5 px-5 ${styles.title}`}>
                  <h3>I'm a web developer</h3>
                  <h2>Prashant_Tiwari</h2>
                  <p>
                    image by{" "}
                    <a
                      href="https://www.freepik.com/"
                      target="_blank"
                      data-lang-en='{"content":"Freepik","href":"https://www.freepik.com/"}'
                    >
                      Freepik
                    </a>
                  </p>
                  <div className={styles.btmline}></div>
                  <Row>
                    <Col md="3">
                      <div className={styles.left}>
                        <p> Date of Birth: </p>
                        <p> Address: </p>
                        <p> Email: </p>
                        <p> Phone: </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className={styles.right}>
                        <p>&nbsp; September</p>
                        <p>&nbsp; Lucknow, Uttar Pradesh, India</p>
                        <p>
                          &nbsp;
                          <a
                            href="https://www.freepik.com/"
                            target="_blank"
                            data-lang-en='{"content":"Freepik","href":"https://www.freepik.com/"}'
                          >
                            prim19n@gmail.com
                          </a>
                        </p>
                        <p>
                          &nbsp;
                          <a
                            href="https://www.freepik.com/"
                            target="_blank"
                            data-lang-en='{"content":"Freepik","href":"https://www.freepik.com/"}'
                          >
                            98-123-456-00
                          </a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <Row>
                      <Col md="9">
                        <div
                          className={`${styles.btn} text-uppercase text-white text-center`}
                        >
                          Download Cv
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md="6" className="p-0">
                <div className={`h-100 flex-fill ${styles.profileImage}`}>
                  {/* <img className="position-absolute" src="/img/profilePic.jpg" alt="profile" /> */}
                </div>
              </Col>
            </Row>
      </Container>
    </div>
  );
};

export default About;
