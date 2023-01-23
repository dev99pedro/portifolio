import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar/Navbar'
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

function App() {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main></Main>} />
                    <Route path='/skills' element={<Skills></Skills>} />
                </Routes>
            </Router>
    )

}

export default App