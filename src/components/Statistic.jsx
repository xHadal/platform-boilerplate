import React from "react";
import {
  AiFillDollarCircle,
  AiFillExperiment,
  AiFillTag,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styled from "styled-components";
function Statistic() {
  return (
    <Section>
      {/* TOTAL SALES */}
      <div className="analytic color1">
        <div className="design">
          <div className="logo">
            <AiFillTag />
          </div>
          <div className="content">
            <h5>$123,123,123</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL SALES</h6>
          <span className="t1">+18%</span>
          <AiOutlineArrowUp />
        </div>
      </div>
      {/* TOTAL EXPENSES */}
      <div className="analytic color1">
        <div className="design">
          <div className="logo">
            <AiFillExperiment />
          </div>
          <div className="content">
            <h5>$123,123,123</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL EXPENSES</h6>
          <span className="t2">-8%</span>
          <AiOutlineArrowDown />
        </div>
      </div>
      {/* TOTAL EXPENSES */}
      <div className="analytic color1">
        <div className="design">
          <div className="logo">
            <AiFillDollarCircle />
          </div>
          <div className="content">
            <h5>$123,123,123</h5>
          </div>
        </div>
        <div className="total">
          <h6>TOTAL REVENUE</h6>
          <span className="t2">-8%</span>
          <AiOutlineArrowDown />
        </div>
      </div>
    </Section>
  );
}

export default Statistic;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .color1 {
    background-color: #eef4ff;
  }
  .color2 {
    background-color: #fdf4f5;
  }
  .color3 {
    background-color: #fffce4;
  }
  .analytic {
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: #333;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #d4e0ff;
      color: black;
      svg {
        color: black;
      }
    }
    .design {
      display: flex;
      align-items: center;
      gap: 1rem;
      .logo {
        background-color: white;
        border-radius: 1rem;
        border: 1px solid #b9b9b9;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        svg {
          font-size: 1.5rem;
        }
      }
    }
    .total {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-evenly;
      margin-top: 20px;
      .svg1 {
        color: green;
      }
      .svg2 {
        color: green;
      }
      .t1 {
        color: green;
      }
      .t2 {
        color: orange;
      }
      h6 {
        color: grey;
      }
    }
  }
`;
