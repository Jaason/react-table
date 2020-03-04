import React, {useContext, useState} from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

import addWrapper from "./helpers/addWrapper";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./themes/AppTheme";

function App() {

  const [theme, setTheme] = useState<string>("light");

  const Display = () => {
    const {theme} = useContext(ThemeContext);

    console.log("th", typeof(theme));
    console.log('theme', AppTheme);

    const currentTheme = AppTheme[theme];
    return <>
      <p style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}>Theme: {theme}</p>
    </>
  };

  const onClickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{theme}}
    >
      <div className="App">
        <Display/>
        <Button variant="contained" color="primary" onClick={onClickHandler}>
          Change theme
        </Button>
      </div>
    </ThemeContext.Provider>
  );
}

export default addWrapper(App);
