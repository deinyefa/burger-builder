import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

// import appStyles from './App.module.css';

function App() {
  return (
    // <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    // {/* </div> */}
  );
}

export default App;
