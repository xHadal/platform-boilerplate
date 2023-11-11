import React from "react";
import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
// import avatarImage from
function NavBar() {
  const items = [
    {
      title: "",
      icon: "",
      action: "",
    },
  ];
  return (
    <Nav>
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="notification">
        <div className="date">
          <AiOutlineCalendar />
          <span>Jan 30 2023</span>
        </div>
        <div className="icon">
          <BiSearch />
          <span>|</span>
          <AiOutlineBell />
          <span>|</span>
          <div className="avatar"></div>
          <AiOutlineCaretDown />
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      margin-left: 0.5rem;
      color: #333;
      font-weight: bold;
      font-size: 2rem;
    }
  }
  .notification {
    display: flex;
    align-items: center;
    margin-top: -10px;
    .date {
      background-color: #e91d631c;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 1rem;
      svg {
        color: #333;
      }
      span {
        color: #333;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      svg {
        color: #333;
      }
      span {
        color: #333;
      }
      .image {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 3rem;
      }
    }
  }
`;
