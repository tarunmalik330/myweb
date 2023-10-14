import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tour from "../assets/images/png/MountainHiking.png";
import MachuPicchu from "../assets/images/png/MachuPicchu.png";
import Arizona from "../assets/images/png/Arizona.png";
import Italy from "../assets/images/png/Italy.png";
import { LeftArrow } from "./Icon";
import { RightArrow } from "./Icon";

function Popular() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1202,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 773,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 437,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div id="Destinations" className="bg_white overflow-hidden">
        <Container className="pb-5 pt-4 pt-5">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="col-12 pb-sm-4 pb-lg-0 mb-4">
              <h4 className="ff-Inter fw_600 fs_56 text-black max-width_400">
                Find Popular Destination
              </h4>
            </Col>
            <Col
              lg={6}
              className="col-12 d-flex justify-content-lg-end pb-5 pb-md-0 mb-4"
            >
              <button className="first circle_btn me-2">
                <LeftArrow />
              </button>
              <button className="second circle_btn">
                <RightArrow />
              </button>
            </Col>
          </Row>
          <Slider {...settings}>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img src={Tour} alt="Tour" className="w-100 rounded-3" />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Mountain Hiking Tour
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Mountain Hiking Tour
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $89 <span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img
                  src={MachuPicchu}
                  alt="MachuPicchu"
                  className="w-100 rounded-3"
                />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Machu Picchu, Peru
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Machu Picchu, Peru
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $99<span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img src={Arizona} alt="Arizona" className="w-100 rounded-3" />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Mountain Hiking Tour
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Mountain Hiking Tour
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $70<span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img src={Italy} alt="Italy" className="w-100 rounded-3" />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Mountain Hiking Tour
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Mountain Hiking Tour
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $89 <span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img
                  src={MachuPicchu}
                  alt="MachuPicchu"
                  className="w-100 rounded-3"
                />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Machu Picchu, Peru
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Machu Picchu, Peru
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $99<span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="slider_box me-4 pb-4 curser_pointer">
                <img src={Arizona} alt="Arizona" className="w-100 rounded-3" />
                <p className="ff-Inter fw_600 fs_22 text-black text-capitalize ps-2 mt-3 h-100">
                  Mountain Hiking Tour
                </p>
                <p className="ff-Inter fs_14 fw_400 text_grey ps-2">
                  Mountain Hiking Tour
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="ff-Inter fs_22 fw_600 ps-2 mt-4 pt-1">
                    $70<span className="fs_16 fw_400">/Person</span>
                  </h3>
                  <a className="book-now_btn text_black text-nowrap">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default Popular;
