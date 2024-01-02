import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-black-111 mt-5" alt="footer.bg">
      <div className="container foolter-container">
        <div className="row border-bottom-black">
          <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">About Us</h5>
              <div className="bottom-footer-about mt-3">
                <p>
                  We started our business in 2009. We providing complete ON SITE
                  Computer, Laptop, Printer Sales &amp; Services to home and
                  business PC users, based on many years experience in Laptop
                  &amp; Desktop PC service and repairs, technical support,
                  maintenance and networking. We offer low prices and excellent
                  remote services via internet to solve most common issues. We
                  want to grow together with our client needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-5">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">Services</h5>
              <ul className="list list-border angle-double-right footer-services">
                <li>
                  <Link href="/">Computer & Laptop Repair Services</Link>
                </li>
                <li>
                  <Link href="/">Printer Repair</Link>
                </li>
                <li>
                  <Link href="/">Catrige Refill</Link>
                </li>
                <li>
                  <Link href="/">CCTV Installation</Link>
                </li>
                <li>
                  <Link href="/">Networking</Link>
                </li>
                <li>
                  <Link href="/">Data Recovery</Link>
                </li>
                <li>
                  <Link href="/">Software Installation & Configuration</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">Address</h5>
              <ul className="angle-double-right mt-3">
                <li className="m-0 pl-10 pr-10">
                  {" "}
                  <i className="fa fa-map-marker text-theme-colored mr-5"></i>{" "}
                  <a className="" href="#">
                    Bhubaneswar, Odisha, India
                  </a>{" "}
                </li>

                <li className="m-0 pl-10 pr-10">
                  {" "}
                  <i className="fa fa-envelope-o text-theme-colored mr-5"></i>{" "}
                  <a className="" href="mailto:cssinhyd@gmail.com">
                    xyz@xyz.com
                  </a>{" "}
                </li>
                <li className="m-0 pl-10 pr-10">
                  {" "}
                  <i className="fa fa-phone text-theme-colored mr-5"></i>{" "}
                  <a className="" href="tel:+91 9966670202">
                    +91 111111111
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-black-222">
        <div className="container pt-10 pb-0">
          <div className="row">
            <div className="col-md-12 sm-text-center">
              <p className="font-14 m-0">
                © 2009 Odisha Computer Services. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-right flip ">
              <div className="widget no-border m-0"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="callme">
        <a href="tel:+91 99666 70202" title="+91 99666 70202">
          <div id="callmeMain"></div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
