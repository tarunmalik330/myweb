import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customer from "../assets/images/png/AboutUsImg.png";
import Star from "../assets/images/png/StarsImg.png";
import { LeftArrow } from "./Icon";
import { RightArrow } from "./Icon";

function AboutUs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <div id="About-us" className="bg_white">
        <Container className="container pb-5 pb-4 pt_100">
          <Row className="row align-items-center justify-content-center">
            <Col
              lg={6}
              className="col-12 d-flex align-items-center
              justify-content-center pb-sm-5 pb-lg-0"
            >
              <img src={Customer} alt="Customer" className="w-100 mw-400" />
            </Col>
            <Col className="col-lg-6 col-12 pt-5 pt-lg-0 position-relative">
              <div className="orange_line"></div>
              <h5 className="ff-Inter fw_600 fs_56 text-black max-width_467 mt-3 mb-4">
                A customer said about us:
              </h5>
              <Slider {...settings}>
                <div className="customer-slider_box">
                  <p className="ff-Inter fs_18 fw_400 text_grey max-width_549 mb-3">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={Star} alt="Star" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 pb-4">
                      <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                      <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                    </div>
                    <div>
                      <button className="black circle_btn me-2">
                        <LeftArrow />
                      </button>
                      <button className="white circle_btn">
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="customer-slider_box">
                  <p className="ff-Inter fs_18 fw_400 text_grey max-width_549 mb-3">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={Star} alt="Star" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 pb-4">
                      <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                      <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                    </div>
                    <div>
                      <button className="black circle_btn me-2">
                        <LeftArrow />
                      </button>
                      <button className="white circle_btn">
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="customer-slider_box">
                  <p className="ff-Inter fs_18 fw_400 text_grey max-width_549 mb-3">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={Star} alt="Star" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 pb-4">
                      <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                      <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                    </div>
                    <div>
                      <button className="black circle_btn me-2">
                        <LeftArrow />
                      </button>
                      <button className="white circle_btn">
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="customer-slider_box">
                  <p className="ff-Inter fs_18 fw_400 text_grey max-width_549 mb-3">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={Star} alt="Star" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 pb-4">
                      <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                      <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                    </div>
                    <div>
                      <button className="black circle_btn me-2">
                        <LeftArrow />
                      </button>
                      <button className="white circle_btn">
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="customer-slider_box">
                  <p className="ff-Inter fs_18 fw_400 text_grey max-width_549 mb-3">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={Star} alt="Star" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex flex-column mt-4 pb-4">
                      <h3 className="ff-Inter fs_20 fw_500">Andrew Sarma</h3>
                      <p className="ff-Inter fs_12 fw_400">Enterpreneur</p>
                    </div>
                    <div>
                      <button className="black circle_btn me-2">
                        <LeftArrow />
                      </button>
                      <button className="white circle_btn">
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default AboutUs;
