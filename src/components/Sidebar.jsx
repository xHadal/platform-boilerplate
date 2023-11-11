import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiFillAppstore,
  AiFillShopping,
  AiOutlineShoppingCart,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
  AiOutlineAppstore,
  AiOutlineUnlock,
} from "react-icons/ai";

import { SiAccusoft, SiCodesandbox } from "react-icons/si";

function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);

  const sections = [
    {
      title: "Dashboard",
      icon: <AiOutlineAppstore />,
      active: 0,
    },

    {
      title: "Settings",
      icon: <AiOutlineSetting />,
      active: 0,
    },
    {
      title: "Contact",
      icon: <AiOutlineMessage />,
      active: 0,
    },
  ];
  return (
    <Section>
      <div className="top">
        <div className="brand">
          <AiFillCodeSandboxCircle />
          <span>WELLCOME</span>
        </div>
        <div className="links">
          <ul>
            {sections.map((section, i) => {
              return (
                <li
                  key={i}
                  className={currentLink === i ? "active" : "none"}
                  onClick={() => setCurrentLink(i)}
                >
                  <a href="#">
                    {section.icon}
                    <span className="border">{section.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="map">
          <AiFillAppstore />
          <span>Unlock more iunformation now! Upgrade to PRO</span>
        </div>
        <div className="logout">
          <a href="#">
            <AiOutlineLogout />
            <span>Log out</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Sidebar;

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #e91d63;
  height: 100%;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem 0;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.3rem 0;
      svg {
        color: #fff;
        font-size: 3rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 2rem;
          border-radius: 0.3rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background-color: #e97ea3;
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #fff;
            font-weight: bold;
          }
          svg {
            font-size: 1.4rem;
          }
          span {
            display: flex;
            gap: 2rem;
          }
          &.active {
            background-color: #fff;
            a {
              color: #e91d63;
              font-weight: bold;
              span {
                display: flex;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .map {
      width: 90%;
      display: flex;
      background-color: #fff;
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
      border-radius: 0.5rem;
      color: #e91d63;
      font-weight: bold;

      svg {
        color: #eda4ff;
        font-size: 2rem;
      }
    }
    .logout {
      padding: 0.6rem 3rem;
      cursor: pointer;
      margin: 1rem 0;
      a {
        transition: all ease 0.3s;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        gap: 1rem;

        svg {
          transition: all ease 0.5s;
          font-weight: bold;
          font-size: 1.4rem;
        }
      }
      &:hover {
        a {
          animation-name: glow;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        svg {
        }
      }
    }
  }
`;
