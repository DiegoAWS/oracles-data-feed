
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RatePage from './RatePage/RatePage'
import Overview from './Overview/Overview'

function MainRouter() {
    return (   
        <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/currency/:base/:quote" element={<RatePage />} />
        </Routes>
    )
}

export default MainRouter