import React from 'react';


// Imported Components 
import Header from './componet_file.js/header_file.js'
import Contact from './componet_file.js/contact_form.js'

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
