import React from 'react';

import Header from './Header';
import '../styles/Main.scss';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
