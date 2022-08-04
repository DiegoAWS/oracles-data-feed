import React from 'react'
import { Link } from 'react-router-dom'
import OptaktLogo from '../../assets/optakt-icon.svg';
import OptaktLogoLight from '../../assets/optakt-icon-light.svg';
import DarkModeIcon from '../../assets/moon-solid.svg'
import LightModeIcon from '../../assets/sun-solid.svg'
import SearchIcon from '../../assets/magnifying-glass-solid.svg'
import SearchIconLight from '../../assets/magnifying-glass-solid-light.svg'
import AddchartIcon from '@mui/icons-material/Addchart';
import { useMainContext } from '../../context/MainContext';
import './Sidebar.scss'

function Sidebar() {
    const { theme, toggleTheme, searchBarOpen, toggleSearchBar } = useMainContext()

    return (
        <div className='sidebarSectionWrapper'>
            <div className='upperSection'>
                <Link to="/" className='titleContainer'>
                    <div className='box' title='Home' >
                        <AddchartIcon htmlColor={theme.primary} fontSize="large" />
                    </div>
                    <div className="titleMobileSite">
                        Oracles Feeds
                    </div>
                </Link>
                <div className={`box ${searchBarOpen ? 'searchBarOpen' : ''}`} title="Search" onClick={toggleSearchBar}>
                    <img src={theme.isDarkMode ? SearchIcon : SearchIconLight} alt='SearchIcon' className='searchIcon' />
                </div>
            </div>
            <div className='lowerSection'>
                <div className='box' onClick={toggleTheme} title={theme.isDarkMode ? "Light Mode" : "Dark Mode"}>
                    <img src={theme.isDarkMode ? LightModeIcon : DarkModeIcon} alt='ToggleDarkMode' className='toggleDarkMode' />
                </div>
                <a className='box' href='https://www.optakt.io/' title='Optakt Labs'>
                    <img src={theme.isDarkMode ? OptaktLogo : OptaktLogoLight} alt='OptaktLogo' className='logoOptakt' />
                </a>
            </div>
        </div>
    )
}

export default Sidebar