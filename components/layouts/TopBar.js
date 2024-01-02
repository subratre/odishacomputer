import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <section id="topbar">
      <div className="container">
        <div class="contact-info me-auto d-flex justify-content-between align-items-center">
          <ul>
            <li>
              <i class="fa-sharp fa-solid fa-envelope"></i>
              <a href="mailto:info@xyz.com">info@xyz.com</a>
            </li>
            <li>
              <i class="fa-sharp fa-solid fa-phone"></i> (+91) 23432432432
            </li>
          </ul>
          <div className="book-appointment">
            <div className="cta">
              <Link href="/">Book Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
