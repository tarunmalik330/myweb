import React from "react";
import Container from "react-bootstrap/Container";

function Newsletter() {
  return (
    <div>
      <div className="bg_white pt-5 pt-4 pt-3 pb-5 pb-4">
        <Container className="background-img rounded-4 pt-5 pt-4 pb-5 pb-4">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <div>
              <h2 className="fs_40 fw_600 ff-Inter text-center pb-2">
                Sign up to our newsletter
              </h2>
              <p className="fs_16 fw_400 ff-Inter text_grey text-center mw-415 m-0 pb-5">
                Reciev latest news, update, and many other things every week.
              </p>
            </div>
            <div className="email-box d-flex align-items-center justify-content-between">
              <input
                type="text"
                name="Enter Your email address"
                placeholder="Enter Your email address"
                className="email rounded-5 fw_400 fs_14 ff-Inter opacity-75"
              />
              <div className="d-flex justify-content-end small-box">
                <a href="">
                  <svg
                    width="42"
                    height="44"
                    viewBox="0 0 42 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1191_646)">
                      <path
                        d="M13.082 17.8821L17.0859 19.8812L26.3675 11.5213L19.0878 20.9716V25.3333L21.8177 21.8803L26.3675 23.6977L28.9154 8.25L13.082 17.8821Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1191_646"
                        x="0.0820312"
                        y="0.25"
                        width="41.833"
                        height="43.0833"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="6.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.871115 0 0 0 0 0.175254 0 0 0 0 0 0 0 0 0.7 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1191_646"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1191_646"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Newsletter;
