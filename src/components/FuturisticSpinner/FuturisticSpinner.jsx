import React from 'react'
import './FuturisticSpinner.scss'

import FuturisticSpinnerImg from '../../assets/futuristicSpinner.gif';

function FuturisticSpinner() {
    return (
        <div className='futuristicSpinnerWrapper'>
            <img src={FuturisticSpinnerImg} alt="Futuristic Spinner" className='futuristicSpinner' />
        </div>
    )
}

export default FuturisticSpinner