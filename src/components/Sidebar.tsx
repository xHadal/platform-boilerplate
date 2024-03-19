import { FC, useState, useContext } from "react";
import styled from "styled-components";

import {
  AiFillAppstore,
  AiFillShopping,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlinePieChart,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
  AiFillCodeSandboxCircle,
  AiOutlineAppstore,
} from "react-icons/ai";
import SwitchCustom from "@/components/ui/Switch";
import { ManageThemeContext } from "@context/Theme";
import Brightness3TwoToneIcon from "@mui/icons-material/Brightness3TwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
interface SidebarProps {}

interface Section {
  title: string;
  icon: JSX.Element;
  active: number;
}

const sections: Section[] = [
  {
    title: "Dashboard",
    icon: <AiOutlineAppstore />,
    active: 1,
  },
  {
    title: "Cart",
    icon: <AiFillShopping />,
    active: 0,
  },
  {
    title: "Reports",
    icon: <AiOutlinePieChart />,
    active: 0,
  },
  {
    title: "Manage Users",
    icon: <AiOutlineUsergroupAdd />,
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
const Sidebar: FC<SidebarProps> = () => {
  const [currentLink, setCurrentLink] = useState<number>(0);
  const theme = useContext(ManageThemeContext);
  return (
    <Section>
      <div className="top">
        <div className="brand">
          <AiFillCodeSandboxCircle />
          <span>WELLCOME</span>
        </div>
        <SwitchCustom
          size="small"
          iconsize="small"
          onClick={() => theme.toggle()}
          leftIcon={LightModeTwoToneIcon}
          rightIcon={Brightness3TwoToneIcon}
        />
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
};

export default Sidebar;

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: ${(props) => props.theme.common.primary};
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
        color: ${(props) => props.theme.common.white};
        font-size: 3rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme.common.white};
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
            background-color: ${(props) => props.theme.common.hover};
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: ${(props) => props.theme.common.white};
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
            background-color: ${(props) => props.theme.common.white};
            a {
              color: ${(props) => props.theme.common.primary};
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
      background-color: ${(props) => props.theme.common.white};
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
      border-radius: 0.5rem;
      color: ${(props) => props.theme.common.primary};
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
        color: ${(props) => props.theme.common.white};
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
