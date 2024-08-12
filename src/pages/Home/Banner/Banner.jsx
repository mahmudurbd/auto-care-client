import React from "react";
import { Button, Carousel } from "antd";
import "./Banner.scss";
import Banner1 from "../../../assets/banner/1.jpg";
import Banner2 from "../../../assets/banner/2.jpg";
import Banner3 from "../../../assets/banner/3.jpg";
import Banner4 from "../../../assets/banner/4.jpg";
import Banner5 from "../../../assets/banner/5.jpg";
import Banner6 from "../../../assets/banner/6.jpg";

const Banner = () => {
  return (
    <div className="banner-area">
      <Carousel autoplay arrows>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner1} alt="Slide 1" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner2} alt="Slide 2" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner3} alt="Slide 3" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner4} alt="Slide 4" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner5} alt="Slide 5" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="gradient-overlay"></div>
          <img className="carousel-image" src={Banner6} alt="Slide 6" />
          <div className="carousel-text">
            <h1>Affordable Price For Car Servicing</h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="banner-btn-wrapper">
              <Button className="discover-btn custom-btn-deep">
                Discover More
              </Button>
              <Button className="project-btn custom-btn">Latest Project</Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
