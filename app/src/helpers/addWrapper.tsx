import React from 'react';

export default (Component: any) => {

  return (props: any) => (
    <div>
      <Component {...props} />
    </div>
  );
};

