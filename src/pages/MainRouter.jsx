import Dashboard from '../components/Dashboard/Dashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RatePage from './RatePage/RatePage'

function MainRouter() {
    return (   
        <Routes>
            <Route path="/" element={<Dashboard />} />
            
            <Route path="/currency/:base/:quote" element={<RatePage />} />
        </Routes>
    )
}

export default MainRouter