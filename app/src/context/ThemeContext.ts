import {createContext} from "react";

export interface ITheme {
  theme: string;
}

const ThemeContext = createContext<ITheme>({theme: "light"});
export default ThemeContext;

