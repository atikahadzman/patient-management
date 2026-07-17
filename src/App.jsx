import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Patient from "./pages/Patient";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/patient" element={<Patient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App

