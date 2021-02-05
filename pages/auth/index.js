import React from 'react';

import User from '../../components/User';

const indexPage = () => {
  return (
    <div>
      <h1>The Auth Page</h1>
      <User name="Max" age={28}/>
    </div>
  );
}

export default indexPage;
