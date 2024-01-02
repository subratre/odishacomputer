import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header>
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-2">
              <img src="/images/logo/logonew.png" width="100" />
            </div>
            <div className="col-md-8 align-item-center">
              <ul className="headermenu">
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contacts Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
