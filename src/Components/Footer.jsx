import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer bg-[#2C4143]">
        <div className='max-w-6xl mx-auto p-6 sm:p-8 lg:p-10 bg-[url("/footer/footer-vec.svg")] bg-no-repeat bg-left-top bg-contain lg:bg-auto'>
          {/* Top Section */}
          <div className="top mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
              <img
                src="neogreens-logo.svg"
                alt="NeoGreens Logo"
                className="w-32 sm:w-36 lg:w-40"
              />
              <div className="flex gap-4 sm:gap-5 text-[#EFECD6]">
                <h5
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] hover:underline cursor-pointer transition-all duration-200"
                >
                  About Us
                </h5>
                <h5
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] hover:underline cursor-pointer transition-all duration-200"
                >
                  Contact
                </h5>
              </div>
            </div>

            {/* Social Media Icons */}
            <ul className="flex gap-4 sm:gap-5 items-center justify-center sm:justify-start mt-6 sm:mt-8">
              <li className="hover:scale-110 transition-transform duration-200">
                <img
                  src="footer/IG.svg"
                  alt="Instagram"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </li>
              <li className="hover:scale-110 transition-transform duration-200">
                <img
                  src="footer/FB.svg"
                  alt="Facebook"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </li>
              <li className="hover:scale-110 transition-transform duration-200">
                <img
                  src="footer/X-2.svg"
                  alt="Twitter"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </li>
              <li className="hover:scale-110 transition-transform duration-200">
                <img
                  src="footer/LN.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </li>
            </ul>
          </div>

          {/* Divider */}
          <hr className="border-[#EFECD6]/40 mt-4 sm:mt-5" />

          {/* Bottom Section */}
          <div className="bottom mt-6 sm:mt-8 lg:mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[#EFECD6]">
            <span
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
              className="text-[#EFECD6] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] text-center sm:text-left"
            >
              Copyright 2025 © NeoGreen All rights Reserved
            </span>

            {/* Policy Links */}
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
              <li>
                <span
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] hover:underline cursor-pointer transition-all duration-200"
                >
                  Privacy Policy
                </span>
              </li>
              <li>
                <span
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] hover:underline cursor-pointer transition-all duration-200"
                >
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] hover:underline cursor-pointer transition-all duration-200"
                >
                  Return Policy
                </span>
              </li>
              <li>
                <span
                  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
                  className="text-[#EFECD6] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[22px] hover:underline cursor-pointer transition-all duration-200"
                >
                  Shipping policy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
