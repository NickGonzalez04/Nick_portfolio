import React from 'react';



// Imported Components 
import Nav from './component_file.js/nav_bar.js';
import Header from './component_file.js/header_file.js';
import Contact from './component_file.js/contact_form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
      <Header/>
      <Contact/>
      </header>
    </div>
  );
}

export default App;
