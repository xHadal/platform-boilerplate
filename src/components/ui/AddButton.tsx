import { FC } from "react";
import styled from "styled-components";

interface AddButtonProps {
  text: string;
}

const AddButton: FC<AddButtonProps> = ({ text }) => {
  return <StyledAddButton href="#">{text}</StyledAddButton>;
};

export default AddButton;

const StyledAddButton = styled.a`
  text-align: center;
  padding: 15px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.text.primary};
  background: ${(props) => props.theme.common.secondary};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.common.secondaryHover};
  &:hover {
    background: ${(props) => props.theme.common.secondaryHover};
  }
`;
