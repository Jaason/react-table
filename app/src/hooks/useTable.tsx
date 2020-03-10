import React, {useState} from 'react';

export default function CustomTable(getData: object) {

  const [columns, setColumns] = useState({});
  const [data, setData] = useState(null);

  const getTableProps = () => {
    return "dupa1";
  };

  const getTableBodyProps = () => {
   return "dupa2";
  };

  return [
    getTableProps,
    getTableBodyProps
  ];

}
