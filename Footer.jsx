import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <footer className="bg-muted text-dark pt-5 pb-3">
      <div className="container">
        <div className="row justify-content-between">

          {/* البراند والوصف */}
          <div className="col-12 col-md-5 mb-4">
            <h5 className="fw-bolder mb-3 fs-3">TakeCare</h5>
            <p className="text-secondary small">
              We are passionate about enhancing natural beauty through carefully curated products,
              expert tips, and a seamless shopping experience. Whether you're looking for everyday glow
              or a glam transformation, our site brings the best of beauty right to your fingertips.
            </p>
          </div>

          {/* الأعمدة الديناميكية */}
          {footer.slice(0, 2).map((item, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <h6 className="fw-bold mb-2">{item.header}</h6>
              <ul className="list-unstyled text-muted small">
                {[
                  item.content1,
                  item.content2,
                  item.content3,
                  item.content4,
                  item.content5,
                  item.content6,
                ]
                  .filter(Boolean)
                  .map((text, i) => (
                    <li key={i} className="mb-1">{text}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* الحقوق */}
        <hr className="border-dark py-2" />
        <div className="text-center">
          <p className="mb-0 small">
            &copy; 2025 | Website created with ❤️ by Esraa Saad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
