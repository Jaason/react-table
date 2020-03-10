import React, {useMemo} from 'react';
import makeData from '../makeData';

const getColumns = () => {
  console.log( "memo columns called");
  // we use memo for long processing data, switch to some kind of api later

  return (
      [
          {
              Header: 'Name',
              columns: [
                  {
                      Header: 'First Name',
                      accessor: 'firstName',
                  },
                  {
                      Header: 'Last Name',
                      accessor: 'lastName',
                  },
              ],
          },
          {
              Header: 'Info',
              columns: [
                  {
                      Header: 'Age',
                      accessor: 'age',
                  },
                  {
                      Header: 'Visits',
                      accessor: 'visits',
                  },
                  {
                      Header: 'Status',
                      accessor: 'status',
                  },
                  {
                      Header: 'Profile Progress',
                      accessor: 'progress',
                  },
              ],
          },
      ]
  )
};


export default (Component: any) => {

  const data = React.useMemo(() => makeData(20), []);

  // We create the memo hook, when columns changes, the function will be executed again
useMemo(getColumns, [columns]);

  console.log(data);

  return (props: any) => (
    <div>
      <Component {...props} />
    </div>
  );
};

