import React, { useContext, useState } from "react";
import useTable from "../hooks/useTable";
import Table from "@material-ui/core/Table";
import { TableBody, TableRow, TableCell } from "@material-ui/core";

const CustomTable = (props: any) => {
    // Use the state and functions returned from useTable to build UI
    const [getTableProps, getTableBodyProps, rows] = useTable(props);

    // Render the UI
    return (
        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell> {getTableProps()}</TableCell>
                        <TableCell> {getTableBodyProps()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

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
        </div>
    )
}

export default CustomTable;