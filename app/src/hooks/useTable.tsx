import { useState } from 'react';

export default function useTable(getColumns: object) {

    const [columns, setColumns] = useState({});
    const [data, setData] = useState(null);

    const getTableProps = () => {
        console.log("getTableProps");
    }

    const getTableBodyProps = () => {
        console.log("getTableBodyProps");
    }

    return columns;
}