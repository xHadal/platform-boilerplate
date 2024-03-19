import "styled-components";
import { ICommonTheme } from "styled-components";

interface IPalette {
  main: string;
  contrast: string;
}
interface IText {
  black: string;
  white: string;
  primary: string;
  secondary: string;
}

declare module "styled-components" {
  export interface ICommonTheme {
    borderRadius: string;
    common: {
      white: string;
      black: string;
      hover: string;
      primary: string;
      secondary: string;
      secondaryHover: string;
      background: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      text: IText;
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
export const lightTheme: ICommonTheme = {
  borderRadius: "string",
  common: {
    black: "#222831",
    white: "#ffffff",
    hover: "#3d948d",
    primary: "#35aca2",
    secondary: "#eef4ff",
    secondaryHover: "#d4e0ff",
    background: "#ffffff",
  },
  palette: {
    text: {
      black: "#222831",
      white: "#ffffff",
      primary: "#222831",
      secondary: "#eef4ff",
    },
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#e91d63",
      contrast: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrast: "#ffffff",
    },
  },
};

export const darkTheme: ICommonTheme = {
  borderRadius: "string",
  common: {
    black: "#222831",
    white: "#ffffff",
    hover: "#3d948d",
    primary: "#297e77",
    secondary: "#444b56",
    secondaryHover: "#191d23",
    background: "#222831",
  },
  palette: {
    text: {
      black: "#222831",
      white: "#ffffff",
      primary: "#eef4ff",
      secondary: "#222831",
    },
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrast: "#e91d63",
    },
    secondary: {
      main: "#709fb0",
      contrast: "#ffffff",
    },
  },
};
