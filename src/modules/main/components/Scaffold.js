import React from 'react';

import AppBar from './AppBar';

const Scaffold = ({ children }) => (
  <>
    <AppBar />
    <div>{children}</div>
  </>
);
export default Scaffold;
