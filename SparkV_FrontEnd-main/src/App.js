// App.js
import React from 'react';

import { Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


const App = () => {
    return (
    
          
      <main>
      <Outlet/>
         </main>
       
          
    );
};

export default App;
