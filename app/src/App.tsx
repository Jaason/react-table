import React, {useContext, useState} from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

import addWrapper from "./helpers/addWrapper";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./themes/AppTheme";
import useTable from "./hooks/useTable";
import Table from "@material-ui/core/Table";
import {TableBody, TableRow, TableCell} from "@material-ui/core";

const App = (props: object) => {

  const [theme, setTheme] = useState<string>("light");
  const [getTableProps, getTableBodyProps, rows] = useTable(props);

  const Display = () => {
    const {theme} = useContext(ThemeContext);

    const currentTheme = AppTheme[theme];
    return <>
      <div style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        width: '100%',
        height: '10vh'
      }}>
        <p style={{margin: '0 0 30px; padding: 30px'}}>Theme: {theme}</p>

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
      value={{theme}}
    >
      <div className="App">
        <Display/>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>test {getTableProps()}</TableCell>
              <TableCell> {getTableBodyProps()}</TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </div>

    </ThemeContext.Provider>
  );
};

// function App() {
//
// //
// //   function Table({ id }) {
// //     // Use the state and functions returned from useTable to build your UI
// //     // const {
// //     //   getTableProps,
// //     //   getTableBodyProps,
// //     //   headerGroups,
// //     //   rows,
// //     //   prepareRow,
// //     // } = useTable({
// //     //   columns,
// //     //   data,
// //     // })

// // // const { getTableProps, getTableBodyProps } = useTable(getColumns);
// //
// //     // Render the UI for your table
// //     return (
// //       <table {...getTableProps()}>
// //         <thead>
// //           {/* {headerGroups.map(headerGroup => (
// //             <tr {...headerGroup.getHeaderGroupProps()}>
// //               {headerGroup.headers.map(column => (
// //                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
// //               ))}
// //             </tr>
// //           ))} */}
// //         </thead>
// //         <tbody {...getTableBodyProps()}>
// //           {/* {rows.map((row, i) => {
// //             prepareRow(row)
// //             return (
// //               <tr {...row.getRowProps()}>
// //                 {row.cells.map(cell => {
// //                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
// //                 })}
// //               </tr>
// //             )
// //           })} */}
// //         </tbody>
// //       </table>
// //     )
// //   }

//   );
// }

export default addWrapper(App);
