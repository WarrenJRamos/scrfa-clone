import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* FIXME */
  background-color: #1b3a61;
  color: white;
  padding: 1.5rem 4rem;

  display: flex;
  justify-content: space-between;

  .footer__left {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .company-name {
      font-weight: 700;
    }

    .company-logo {
      width: 135px;
      height: 135px;

      img {
        width: 100%;
      }
    }
  }

  .footer__nav {
    &-list {
      display: flex;
      flex-direction: column;
      gap: 13px;
      list-style: none;
      &-item {
      }
    }
  }

  .footer__right {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .location-header {
      /* FIXME */
      color: #93a4bd;
      text-transform: uppercase;
    }

    address {
      font-style: normal;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 20px;

    .company-logo {
      margin: auto;
    }
  }
`;
