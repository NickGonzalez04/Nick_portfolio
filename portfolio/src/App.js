import React from 'react';
import './index.scss'



// Imported Components 
import Nav from './component_files/nav_bar.js';
import Header from './component_files/header_file.js';
import Contact from './component_files/contact_form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Contact/>
      </header>
    </div>
  );
}

export default App;
