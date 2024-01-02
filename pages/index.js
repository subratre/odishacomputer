import ArrowNext from "@/components/arrow/ArrowNext";
import Carousel from "@/components/caousel/Carousel";
import React from "react";

const Home = () => {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section className="p-3">
        <div className="container">
          <h2 className="text-uppercase mt-0 text-center top-header p-3">
            WELCOME TO <span>ODISHA COMPUTER SERVICES</span>
          </h2>
          <div className="about-para text-wrap">
            <div className="row">
              <div className="col-md-8">
                <p>
                  We started our business in 2009. We providing complete ON SITE
                  Computer, Laptop, Printer Sales &amp; Services to home and
                  business PC users, based on many years experience in Laptop
                  &amp; Desktop PC service and repairs, technical support,
                  maintenance and networking. We offer low prices and excellent
                  remote services via internet to solve most common issues. We
                  want to grow together with our client needs.
                </p>

                <p>
                  We believe that some PC repair jobs simply cannot be done on
                  site if they are to be done properly. Hardware diagnostic
                  tests, file corruption scans and spyware removal can take
                  hours and hours – much of the time the engineer can be working
                  on another job whilst a scan is running. In that situation we
                  offer you a free collection and delivery services at your door
                  step.
                </p>
              </div>
              <div className="col-md-4">
                <img src="/images/pexels-photo-3846554.webp" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="divider parallax layer-overlay overlay-dark-8 mt-5 mb-3"
        data-bg-img="https://www.sbrcomputers.com/assets/images/bg/bg6.jpg"
        alt="bg6"
        data-parallax-ratio="0.7"
        style={{
          backgroundImage:
            'url("https://www.sbrcomputers.com/assets/images/bg/bg6.jpg")',
          backgroundPosition: "50% 25px",
        }}
      >
        <div class="container pt-70 pb-60 pb-sm-10">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50">
              <div class="funfact text-center">
                <i class="fa fa-graduation-cap mt-5 text-white mb-20"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="10"
                  class="animate-number text-white mt-0 font-38 font-weight-500 appeared"
                >
                  14
                </h2>
                <h4 class="text-white text-uppercase">Years of Experiance</h4>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50">
              <div class="funfact text-center">
                <i class="fa  fa-smile-o mt-5 text-white mb-20"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="5000"
                  class="animate-number text-white mt-0 font-38 font-weight-500 appeared"
                >
                  xyz
                </h2>
                <h4 class="text-white text-uppercase">Happy Clients</h4>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 mb-md-50">
              <div class="funfact text-center">
                <i class="fa fa-thumbs-o-up mt-5 text-white mb-20"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="5000"
                  class="animate-number text-white mt-0 font-38 font-weight-500 appeared"
                >
                  xyz{" "}
                </h2>
                <h4 class="text-white text-uppercase">Computer Repaired</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-we-provide">
        <div className="container">
          <div className="row">
            <h2 className="text-center text-uppercase mt-3 servic-offer">
              Service <span> We Provide</span>
            </h2>

            <p className="text-center">
              Our computer repair services guaranteed competitive fixed
              price. We are more than 13 years experience in this field. Our
              experienced Certified Engineer is well talented to solve any
              computer problem with minimum time limit. We don’t charge hourly
              rate. We will finish the job for the price quoted no matter how
              long it takes.
            </p>

            <div className="col-md-4">
              <div className="thumb">
                <img src="/images/laptops.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">
                Computer &amp; Laptop Repair Services
              </h5>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="thumb">
                <img src="/images/printers.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">Printer Repair</h5>
            </div>
            <div className="col-md-4">
              {" "}
              <div className="thumb">
                <img
                  src="/images/pexels-wendelin-jacober-1440504.jpg"
                  width="100%"
                />
              </div>
              <h5 className="text-center mt-3">Cartridge Refill</h5>
            </div>
            <div className="col-md-4 mt-4">
              {" "}
              <div className="thumb">
                <img src="/images/7-1.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">CCTV Installation</h5>
            </div>
            <div className="col-md-4 mt-4">
              {" "}
              <div className="thumb">
                <img src="/images/laptops.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">Networking</h5>
            </div>
            <div className="col-md-4 mt-4">
              {" "}
              <div className="thumb">
                <img src="/images/laptops.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">Data Recovery</h5>
            </div>
            <div className="col-md-4 mt-4">
              {" "}
              <div className="thumb">
                <img src="/images/laptops.jpg" width="100%" />
              </div>
              <h5 className="text-center mt-3">
                Software Installation &amp; Configuration
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
