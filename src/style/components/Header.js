import styled from "styled-components";
import { colorPlate } from "../global";
import { FlexContainer, Container } from "../modules/general";
export const HeaderElem = styled.header`
  background-color: ${colorPlate.bgOxfordBlue};
  position: fixed;
  animation: slideUP 1s ease forwards;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  a {
    text-decoration: none;
  }
  height: 81;
`;

export const HeaderContainer = styled(Container)`
  padding: 10px 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 20px;
    font-weight: 600;
    a {
      color: white;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
`;
