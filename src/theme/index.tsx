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
export const darkTheme: ICommonTheme = {
  borderRadius: "string",
  common: {
    black: "#222831",
    white: "#ffffff",
    hover: "#e97ea3",
    primary: "#e91d63",
    background: "#222831",
  },
  palette: {
    text: {
      black: "#222831",
      white: "#ffffff",
      primary: "#e91d63",
      secondary: "#ffffff",
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

export const lightTheme: ICommonTheme = {
  borderRadius: "string",
  common: {
    black: "#222831",
    white: "#ffffff",
    hover: "#e97ea3",
    primary: "#e91d63",
    background: "#ffffff",
  },
  palette: {
    text: {
      black: "#222831",
      white: "#ffffff",
      primary: "#e91d63",
      secondary: "#ffffff",
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
