import React from 'react';
import './App.css';
import Header from './Header';
import Dropdowns from './Dropdowns';
import JobListings from './JobListings';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    // temporary 300vh
    <div className="App" style={{ height: '300vh' }}>
      <Header />
      <Dropdowns />
      <JobListings />
    </div>
  );
}

export default App;
