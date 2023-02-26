import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FlexCenterContainer } from "../../style/modules/general";
import {
  FooterContainer,
  FlexFooterContainer,
  FooterTestimonialContainer,
} from "../../style/components/Footer";
const socialData = [
  { icon: faFacebook },
  { icon: faInstagram },
  {
    icon: faTwitter,
  },
  {
    icon: faLinkedin,
  },
];
const useFullListData = [
  {
    name: "Games",
  },
  {
    name: "Help Center",
  },
  {
    name: "Privacy and Policy",
  },
  {
    name: "Terms of Use",
  },
  {
    name: "Contact Us",
  },
];
export default function Footer() {
  return (
    <footer class="footer">
      <FooterContainer class="section footer-top">
        <FlexFooterContainer class="container">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img
                src="./images/logo.svg"
                width="150"
                height="73"
                loading="lazy"
                alt="Unigine logo"
              />
            </a>
            <p class="footer-text">
              Our success in creating business solutions is due in large part to
              our talented and highly committed team.
            </p>
            <ul class="social-list">
              {socialData.map((elem) => {
                return (
                  <li>
                    <a href="#" class="social-link">
                      <FontAwesomeIcon
                        icon={elem.icon}
                        style={{ color: "white", fontSize: "1.5rem" }}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="footer-list">
            <p class="title footer-list-title has-after">Usefull Links</p>
            <ul>
              {useFullListData.map((elem) => {
                return (
                  <li>
                    <a href="#" class="footer-link">
                      {elem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="footer-list">
            <p class="title footer-list-title has-after">Contact Us</p>

            <div class="contact-item">
              <span class="span">Location:</span>

              <address class="contact-link">
                153 Williamson Plaza, Maggieberg, MT 09514
              </address>
            </div>

            <div class="contact-item">
              <span class="span">Join Us:</span>

              <a href="mailto:Info@unigine.com" class="contact-link">
                Info@unigine.com
              </a>
            </div>

            <div class="contact-item">
              <span class="span">Phone:</span>

              <a href="tel:+12345678910" class="contact-link">
                +1 (234) 567-8910
              </a>
            </div>
          </div>
        </FlexFooterContainer>
      </FooterContainer>
      <FooterTestimonialContainer class="footer-bottom">
        <FlexCenterContainer class="container">
          <p class="copyright">Copyright ©2023. Powered by RBOne</p>
        </FlexCenterContainer>
      </FooterTestimonialContainer>
    </footer>
  );
}
