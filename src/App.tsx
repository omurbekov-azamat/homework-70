import React from 'react';
import Navbar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import NewContact from "./containers/NewContact/NewContact";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Contacts/>}/>
          <Route path='/new-contact' element={<NewContact/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
