import React from "react";
import {
  Container,
  FlexContainer,
  FlexCenterContainer,
} from "../../style/modules/general";
import {
  FooterContainer,
  FlexFooterContainer,
} from "../../style/components/Footer";
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
              <li>
                <a href="#" class="social-link">
                  <ion-icon
                    name="logo-facebook"
                    role="img"
                    class="md hydrated"
                    aria-label="logo facebook"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon
                    name="logo-twitter"
                    role="img"
                    class="md hydrated"
                    aria-label="logo twitter"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon
                    name="logo-instagram"
                    role="img"
                    class="md hydrated"
                    aria-label="logo instagram"
                  ></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon
                    name="logo-youtube"
                    role="img"
                    class="md hydrated"
                    aria-label="logo youtube"
                  ></ion-icon>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-list">
            <p class="title footer-list-title has-after">Usefull Links</p>

            <ul>
              <li>
                <a href="#" class="footer-link">
                  Tournaments
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Privacy and Policy
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Contact Us
                </a>
              </li>
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

      <FooterContainer class="footer-bottom">
        <FlexCenterContainer class="container">
          <p class="copyright">Copyright ©2023. Powered by RBOne</p>
        </FlexCenterContainer>
      </FooterContainer>
    </footer>
  );
}
