import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <p>
        <span class="temperature">
          64
          <sup>
            <small>o</small>
          </sup>{" "}
          F / 18
          <sup>
            <small>o</small>
          </sup>{" "}
          C
        </span>{" "}
        Overcast Clouds
      </p>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Links</a>
        </li>
        <li>
          <a href="#testimonials">Contact</a>
        </li>
      </ul>
      <ul className="link">
        <li>
          <a href="https://www.google.com/">Terms of Use</a>
        </li>
        <li>
          <a href="https://www.google.com/">Privacy</a>
        </li>
        <li>
          <a href="https://www.google.com/">Copyright</a>
        </li>
        <li>
          <a href="https://www.google.com/">Trademarks</a>
        </li>
        <li>
          <a href="https://www.google.com/">Non-Discrimination</a>
        </li>
        <li>
          <a href="https://www.google.com/">Accessibility</a>
        </li>
        <li>
          <h1>Developer's contact</h1>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            abdulrahmanabdulazeez123@gmail.com
          </a>
        </li>
      </ul>

      {/* <ul>
        <li>
          <a href="#">Applying</a>
        </li>
        <li>
          <a href="#">Visiting</a>
        </li>
        <li>
          <a href="#">Giving</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul> */}

      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
      <span>Copyright &copy; 2023 Explorer. All rights reserved</span>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: grid;
  justify-content: space-evenly;

  grid-row-gap: 10px;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-template-rows: repeat(2, 4fr);
    grid-row-gap: 10px;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
