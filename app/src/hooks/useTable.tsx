import React, {useState} from 'react';

export default function useTable(getData: object) {

  const [columns, setColumns] = useState({});
  const [data, setData] = useState(null);

  const getTableProps = () => {
    return "table prop";
  };

  const getTableBodyProps = () => {
   return "body prop";
  };

  return [
    getTableProps,
    getTableBodyProps
  ];

}
