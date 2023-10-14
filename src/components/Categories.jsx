import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Desert from "../assets/images/png/Desert.png";
import Beach from "../assets/images/png/Beach.png";
import Mountain from "../assets/images/png/Mountain.png";
import Tower from "../assets/images/png/Tower.png";
import Temple from "../assets/images/png/Temple.png";
import Pyramid from "../assets/images/png/Pyramid.png";
import { LeftArrow } from "./Icon";
import { RightArrow } from "./Icon";

function Categories() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1202,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 773,
        settings: {
          slidesToShow: 2,
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
      <div id="Tours" className="bg_white pb-5 pb-3">
        <Container>
          <Row className="justify-content-between">
            <Col md={6} className="col-12">
              <h2 className="fs_56 fw_600 ff-Inter pb-3">Categories</h2>
              <p className="fs_16 fw_400 ff-Inter mw-lg-370 pb-5 pb-3">
                Here are lots of interesting destinations to visit, but don’t be
                confused—they’re already grouped by category.
              </p>
            </Col>
            <Col
              md={6}
              className="col-12 justify-content-md-end d-flex gap-3 pb-4 pb-md-0"
            >
              <button className="prev circle_btn">
                <LeftArrow />
              </button>
              <button className="next circle_btn">
                <RightArrow />
              </button>
            </Col>
          </Row>
          <Slider {...settings}>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column position-relative">
                <div className="position-relative image_overlay">
                  <img
                    src={Beach}
                    alt="Beach"
                    className="border-radius86 slider-img"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Beach</p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img src={Desert} alt="Desert" className="border-radius86" />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>

                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Desert</p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img
                    src={Mountain}
                    alt="Mountain"
                    className="border-radius86"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">
                  Mountain
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img src={Temple} alt="Temple" className="border-radius86" />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Temple</p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img src={Tower} alt="Tower" className="border-radius86" />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">Tower</p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img
                    src={Pyramid}
                    alt="Pyramid"
                    className="border-radius86"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">
                  Pyramid
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="position-relative image_overlay">
                  <img
                    src={Mountain}
                    alt="Mountain"
                    className="border-radius86"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 border-radius86">
                    <p className="ff-Inter fs_20 fw_400 mb-0 text-white">
                      Visite
                    </p>
                  </div>
                </div>
                <p className="fs_26 fw_500 ff-Inter text-center pt-3">
                  Mountain
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default Categories;
