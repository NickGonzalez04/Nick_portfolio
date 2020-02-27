import React from 'react';


// Imported Components 
import Header from './component_files/02_header_file';
import Body from './component_files/03_projects';
import Contact from './component_files/04_contact_form.js';

// Styles
import './style_files/00_index.scss'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <Contact />
      </header>
    </div>
  );
}

export default App;
