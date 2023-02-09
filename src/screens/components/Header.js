import React from "react";
import { Container, FlexContainer } from "../../style/modules/general";
import {
  HeaderElem,
  NavContainer,
  NavUl,
  HeaderContainer,
} from "../../style/components/Header";

export default function Header() {
  return (
    <HeaderElem className="active">
      <HeaderContainer>
        <FlexContainer>
          <a href="#" class="logo">
            <img
              src="./images/logo.svg"
              width="110"
              height="53"
              alt="unigine home"
            />
          </a>

          <NavContainer class="navbar" data-navbar>
            <NavUl class="navbar-list">
              <li class="navbar-item">
                <a href="#home" class="navbar-link" data-nav-link>
                  home
                </a>
              </li>

              <li class="navbar-item">
                <a href="#tournament" class="navbar-link" data-nav-link>
                  tournament
                </a>
              </li>

              <li class="navbar-item">
                <a href="#news" class="navbar-link" data-nav-link>
                  news
                </a>
              </li>

              <li class="navbar-item">
                <a href="#" class="navbar-link" data-nav-link>
                  contact
                </a>
              </li>
            </NavUl>
          </NavContainer>
        </FlexContainer>
      </HeaderContainer>
    </HeaderElem>
  );
}
