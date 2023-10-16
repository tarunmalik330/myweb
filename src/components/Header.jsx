import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerimg from "../assets/images/png/HeaderImg.png";
import { Logo } from "./Icon";
import { Arrowbtn } from "./Icon";
import { Location } from "./Icon";
import { Calender } from "./Icon";

function Header() {
  function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
  }
  return (
    <>
      <div className="bg_white">
        <Container>
          <nav className="pt-4 pb-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span className="me-1">
                  <Logo />
                </span>
                <h2 className="ff-sen fw_700 fs_20 text-black mr_72 mb-0">Salty</h2>
                <ul
                  id="navbar"
                  className="d-flex mb-0 flex-column list-unstyled flex-lg-row gap-5 justify-content-center align-items-center mobile_view z_index_3"
                >
                  <li className="position-relative">
                    <a
                      onClick={opennav}
                      href=" #home"
                      className="text_blue fs_16 fw_400 letter_spacing_1 nav-line ff-poppins"
                    >
                      Home
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      onClick={opennav}
                      href="#About-us"
                      className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line"
                    >
                      About us
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      onClick={opennav}
                      href="#Destinations"
                      className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line"
                    >
                      Destinations
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      onClick={opennav}
                      href="#Tours"
                      className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line"
                    >
                      Tours
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      onClick={opennav}
                      href="#Blog"
                      className="text_blue ff-poppins fs_16 fw_400 letter_spacing_1 nav-line"
                    >
                      Blog
                    </a>
                  </li>
                  <li
                    className="d-flex align-items-baseline nav_button d-block d-lg-none  curser_pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <a
                      href=""
                      className="text_orange ff-poppins fs_16 fw_500 letter_spacing_1"
                    >
                      Book Now
                    </a>
                    <span className="ms-1">
                      <Arrowbtn />
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="d-flex align-items-baseline nav_button d-none d-lg-block  curser_pointer"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <a
                  href=""
                  className="text_orange ff-poppins fs_16 fw_500 letter_spacing_1"
                >
                  Book Now
                </a>
                <span className="ms-1">
                  <Arrowbtn />
                </span>
              </div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-hidden="true"
              ></div>
              <div
                id="menubtn-icon"
                onClick={opennav}
                className="d-lg-none z_index_3 pe-2 pt-2"
              >
                <div className="line"></div>
                <div className="line1 my-2"></div>
                <div className="line2"></div>
              </div>
            </div>
          </nav>
        </Container>
      </div>
      <div>
        <div className="bg_white">
          <Container className="pt-3">
            <Row className="align-items-center justify-content-center">
              <Col
              lg={8}   xl={6}
                className="col-12 d-flex align-items-center justify-content-center mb-sm-5"
              >
                <div>
                  <h2 className="ff-sen fs_84 fw_700 text-black text-capatilize pb-3">
                    Discover the Best Lovely Places
                  </h2>
                  <p className="fs_18 fw_400 ff-inter text-black opacity-75 max-width_500">
                    Plan and book your perfect trip with expert advice, travel
                    tips, destination information and inspiration from us.
                  </p>
                  <Container>
                    <Row className="big_button justify-content-center align-items-center mt_44 mx_aut o">
                      <Col
                        sm={5}
                        className="col-6 d-flex justify-content-center align-items-center btn_line position-relative"
                      >
                        <div>
                          <h3 className="ff-inter fs_18 fw_500 mb-0">Where</h3>
                          <div className="d-flex align-items-baseline justify-content-center">
                            <p className=" mb-0 ff-inter fs_12 fw_400 text_grey">
                              Center Point, Lo...
                            </p>
                            <span className="ps-2">
                              <Location />
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col
                        sm={5}
                        className="col-6 d-flex justify-content-center align-items-center"
                      >
                        <div>
                          <h3 className="ff-inter fs_18 fw_500 mb-0">Date</h3>
                          <div className="d-flex align-items-baseline justify-content-center">
                            <p className=" mb-0 ff-inter fs_12 fw_400 text_grey">
                              09th March,2021
                            </p>
                            <span className="ps-2">
                              <Calender />
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-2 d-flex justify-content-center align-items-center mt-sm_3">
                        <span className="">
                          <svg
                            width="54"
                            height="54"
                            viewBox="0 0 54 54"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="54"
                              height="54"
                              rx="27"
                              fill="#F66F4D"
                            />
                            <path
                              d="M25.692 34.839C30.7428 34.839 34.8372 30.7446 34.8372 25.6939C34.8372 20.6431 30.7428 16.5487 25.692 16.5487C20.6413 16.5487 16.5469 20.6431 16.5469 25.6939C16.5469 30.7446 20.6413 34.839 25.692 34.839Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M32.1592 32.1609L37.4503 37.452"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col
                lg={6}
                className="col-12 d-flex align-items-center justify-content-center mb-5 pt-5 pt-lg-0"
              >
                <img src={headerimg} alt="headerimg" className="w-100" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
