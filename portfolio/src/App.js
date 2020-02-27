import React from 'react';


// Imported Components 
import Header from './component_files/02_header_file';
import Body from './component_files/03_projects';
import Contact from './component_files/04_contact_form.js';
import About from './component_files/05_about.js';

// Styles
import './style_files/00_index.scss'


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Body />
        <Contact />
        <About />
      </header>
    </div>
	);
}

export default App;
