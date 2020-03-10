import React, { useContext, useState, useMemo } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

import addWrapper from "./helpers/addWrapper";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./themes/AppTheme";
import useTable from "./hooks/useTable";

function App() {

  function Table({ id }) {
    // Use the state and functions returned from useTable to build your UI
    // const {
    //   getTableProps,
    //   getTableBodyProps,
    //   headerGroups,
    //   rows,
    //   prepareRow,
    // } = useTable({
    //   columns,
    //   data,
    // })



const { getTableProps, getTableBodyProps } = useTable(getColumns);

    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {/* {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))} */}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })} */}
        </tbody>
      </table>
    )
  }

  const [theme, setTheme] = useState<string>("light");

  const Display = () => {
    const { theme } = useContext(ThemeContext);

    console.log("th", typeof (theme));
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
      value={{ theme }}
    >
      <div className="App">
        <Display />
        <Button variant="contained" color="primary" onClick={onClickHandler}>
          Change theme
        </Button>
      </div>

      <Table
        columns={id}
        // data={data}
      />

    </ThemeContext.Provider>
  );
}

export default addWrapper(App);
