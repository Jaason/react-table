import React from 'react';
import getData from "./api";

const data = () => {
  return getData
};

export default (Component: any) => {

  return (props: any) => (
    <div>
      <Component data={data()} {...props} />
    </div>
  );
};

