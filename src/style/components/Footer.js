import styled from "styled-components";
import { colorPlate } from "../global";
import { FlexContainer, Container } from "../modules/general";

export const FooterContainer = styled(Container)`
  padding: 2rem 0;
  .footer-brand {
    flex: 0 1 30%;
  }
  .footer-list {
    flex: 0 1 28%;
    li {
      margin-top: 0.8rem;
    }
    a {
      text-decoration: none;
      color: ${colorPlate.textWhite};
      transition: var(--transition-1);
      font-weight: 500;
    }
    .footer-link {
      padding-block: 5px;
      font-weight: 520;
    }
    .footer-list-title {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1;
      position: relative;
      max-width: max-content;
      margin-bottom: 1rem;
    }
    .contact-item .span {
      color: ${colorPlate.textPurple};
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 600;
      display: block;
      margin-bottom: 0.3rem;
    }
    .contact-item:not(:last-child) {
      margin-block-end: 15px;
    }
  }
  .footer-link:is(:hover, :focus-visible) {
    color: var(--text-purple);
  }
`;

export const FlexFooterContainer = styled(FlexContainer)`
  align-items: flex-start;
`;
