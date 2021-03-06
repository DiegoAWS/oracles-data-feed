import React from 'react'
import './MainPage.scss'

import { useMainContext } from '../context/MainContext';

import OptaktLogo from '../assets/optakt-icon.svg';
import OptaktLogoLight from '../assets/optakt-icon-light.svg';
import DarkModeIcon from '../assets/moon-solid.svg'
import LightModeIcon from '../assets/sun-solid.svg'
import SearchIcon from '../assets/magnifying-glass-solid.svg'
import SearchIconLight from '../assets/magnifying-glass-solid-light.svg'
import AddchartIcon from '@mui/icons-material/Addchart';
import SearchSideBar from '../components/SearchSideBar/SearchSideBar';
import { Link } from 'react-router-dom';
import MainRouter from './MainRouter';

function MainPage() {
  const { theme, toggleTheme, searchBarOpen, toggleSearchBar } = useMainContext()

  return (
    <div className="App" style={{
      "--backgroundPure": theme.backgroundPure,
      "--background": theme.background,
      "--primary": theme.primary,
      "--secondary": theme.secondary
    }}>

      <div className='sidebarSection'>
        <div className='upperSection'>

          <Link to="/">
            <div className='box' title='Home' >
              <AddchartIcon htmlColor={theme.primary} fontSize="large" />
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

      <div className='bodySection'>
        <MainRouter />
      </div>

      {searchBarOpen && <SearchSideBar />}
    </div >
  );
}

export default MainPage