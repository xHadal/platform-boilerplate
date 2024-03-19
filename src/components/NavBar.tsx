import { FC } from "react";
import styled from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
/* interface AvatarImage {
  url: string;
} */
interface NavBarProps {
  title: string;
  icon?: string;
}

const NavBar: FC<{ data: NavBarProps }> = ({ data }) => {
  const currentDate = new Date();

  return (
    <Nav>
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <StyledNotification>
        <div className="date">
          <AiOutlineCalendar />
          <span>{currentDate.toLocaleDateString()}</span>
        </div>
        <div className="icon">
          <BiSearch />
          <span>|</span>
          <AiOutlineBell />
          <span>|</span>
          {/* <div className="avatar">
            {props.icon && <AvatarImage src={props.icon} alt="Avatar" />}
          </div> */}
          <AiOutlineCaretDown />
        </div>
      </StyledNotification>
    </Nav>
  );
};

export default NavBar;
const StyledNotification = styled.div`
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
      color: ${(props) => props.theme.palette.text.primary};
    }
    span {
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
  .icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    svg {
      color: ${(props) => props.theme.palette.text.primary};
    }
    span {
      color: ${(props) => props.theme.palette.text.primary};
    }
    .image {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 3rem;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      margin-left: 0.5rem;
      color: ${(props) => props.theme.palette.text.primary};
      font-weight: bold;
      font-size: 2rem;
    }
  }
`;
