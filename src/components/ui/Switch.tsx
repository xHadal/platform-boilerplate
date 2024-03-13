import { FC, createElement } from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";

import styled from "styled-components";

interface SwitchThemeProps extends SwitchProps {
  iconsize?: string;
  label?: string;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  onClick: () => void;
}

const SwitchCustom: FC<SwitchThemeProps> = (props: SwitchThemeProps) => {
  const { label, iconsize, onClick, leftIcon, rightIcon, ...switchProps } =
    props;
  return (
    <StyledSwitch>
      {label && label}
      {leftIcon && createElement(leftIcon, { iconsize })}
      <Switch onClick={() => onClick()} {...switchProps}></Switch>
      {rightIcon && createElement(rightIcon, { iconsize })}
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.common.white};
`;
export default SwitchCustom;
