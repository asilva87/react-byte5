// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import BookSearch from './pages/BookSearch/BookSearch'

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book-search" element={<BookSearch />} />
            </Routes>
        </div>
    )
}

export default App
