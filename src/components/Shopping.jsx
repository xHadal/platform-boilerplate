import React from "react";
import { AiOutlineShoppingCart, AiFillCaretUp } from "react-icons/ai";
import styled from "styled-components";

function Shopping() {
  return (
    <Section>
      <div className="shopping">
        <div className="design">
          <div className="logo img1">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total">
          <h6>ONLINE ORDERS</h6>
        </div>
        <div className="number">
          <h6>12345</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">123</span>
        </div>
      </div>
      <div className="shopping">
        <div className="design">
          <div className="logo img2">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total">
          <h6>ONLINE ORDERS</h6>
        </div>
        <div className="number">
          <h6>12345</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">123</span>
        </div>
      </div>
      <div className="shopping">
        <div className="design">
          <div className="logo img3">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total">
          <h6>ONLINE ORDERS</h6>
        </div>
        <div className="number">
          <h6>12345</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">123</span>
        </div>
      </div>
      <div className="shopping">
        <div className="design">
          <div className="logo img4">
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="total">
          <h6>ONLINE ORDERS</h6>
        </div>
        <div className="number">
          <h6>12345</h6>
          <AiFillCaretUp className="svg1" />
          <span className="t1">123</span>
        </div>
      </div>
    </Section>
  );
}

export default Shopping;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .shopping {
    padding: 0.5rem;
    border-radius: 1rem;
    color: #333;
    background-color: #eef4ff;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #d4e0ff;
      color: #333;
      svg {
        color: #333;
      }
    }
    .design {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .img1 {
        background-color: #668dff;
      }
      .img2 {
        background-color: #ffb2c3;
      }
      .img3 {
        background-color: #ffdd00;
      }
      .img4 {
        background-color: #030303;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: space-evenly;
        margin: 10px 0;
        padding: 1rem;
        border-radius: 15px;
        svg {
          font-size: 2rem;
          color: #fff;
        }
      }
    }
    .total {
      text-align: center;
      color: grey;
    }
    .number {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-evenly;
      margin-top: 10px;
      .svg1 {
        color: green;
      }
      .t1 {
        color: green;
      }
      h6 {
        color: #333;
      }
    }
  }
`;
