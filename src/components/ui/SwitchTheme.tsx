import { FC, useContext } from "react";
import Switch from "@mui/material/Switch";
import Brightness3TwoToneIcon from "@mui/icons-material/Brightness3TwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import styled from "styled-components";

//import { useTheme } from "@context/Theme";
import { ManageThemeContext } from "@context/Theme";

interface SwitchThemeProps {}

const SwitchTheme: FC<SwitchThemeProps> = () => {
  const theme = useContext(ManageThemeContext);
  return (
    <StyledToogleTheme>
      <LightModeTwoToneIcon fontSize="small" />
      <Switch color="default" onClick={() => theme.toggle()}></Switch>
      <Brightness3TwoToneIcon fontSize="small" />
    </StyledToogleTheme>
  );
};
const StyledToogleTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.common.white};
`;
export default SwitchTheme;
