import React, { useContext, useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import addWrapper from "./helpers/addWrapper";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./themes/AppTheme";
import CustomTable from "./components/CustomTable";

const App = (props: object) => {

  const [theme, setTheme] = useState<string>("light");

  const Display = () => {
    const { theme } = useContext(ThemeContext);

    const currentTheme = AppTheme[theme];
    return <>
      <div style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        width: '100%',
        height: '10vh'
      }}>
        <p style={{ margin: '0 0 30px; padding: 30px' }}>Theme: {theme}</p>

        <Button variant="contained" color="primary" onClick={onClickHandler}>
          Change theme
        </Button>

      </div>
    </>
  };

  const onClickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme }}
    >
      <div className="App">
        <Display />
        <CustomTable props={props}/>
      </div>

    </ThemeContext.Provider>
  );
};

export default addWrapper(App);
