import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Layout from './page/Layout'
import 'antd/dist/antd.css';
import './App.css';




function App() {
  return (
    <Router>
<Route path="/" component={Layout}>
  
  {/* <Route path="/" component={Layout}></Route>

  <Route path="/table" component={Table}></Route>
  <Route path="/label" component={Label}></Route> */}

</Route>
    </Router>
  );
}

export default App;
