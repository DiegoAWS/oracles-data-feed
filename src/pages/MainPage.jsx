import React from 'react'
import './MainPage.scss'

import { useMainContext } from '../context/MainContext';
import Dashboard from '../components/Dashboard/Dashboard';

import OptaktLogo from '../assets/optakt-icon.svg';
import OptaktLogoLight from '../assets/optakt-icon-light.svg';
import DarkModeIcon from '../assets/moon-solid.svg'
import LightModeIcon from '../assets/sun-solid.svg'
import SearchIcon from '../assets/magnifying-glass-solid.svg'
import SearchIconLight from '../assets/magnifying-glass-solid-light.svg'
import AddchartIcon from '@mui/icons-material/Addchart';
import SearchSideBar from '../components/SearchSideBar/SearchSideBar';
import { Link, Route, Routes } from 'react-router-dom';
import RatePage from './RatePage';

function MainPage() {
  const { theme, toggleTheme, searchBarOpen, toggleSearchBar } = useMainContext()

  return (
    <div className="App" style={{
      "--backgroundPure": theme.backgroundPure,
      "--background": theme.background,
      "--primary": theme.primary,
      "--secondary": theme.secondary,
      "--oposite-backgroundPure": theme.oposite.backgroundPure,
      "--oposite-background": theme.oposite.background,
      "--oposite-primary": theme.oposite.primary,
      "--oposite-secondary": theme.oposite.secondary
    }}>

      <div className='sidebarSection'>
        <div className='upperSection'>

          <Link to="/">
            <div className='box' >
              <AddchartIcon htmlColor={theme.primary} fontSize="large" />
            </div>
          </Link>
          <div className={`box ${searchBarOpen ? 'searchBarOpen' : ''}`} onClick={toggleSearchBar}>
            <img src={theme.isDarkMode ? SearchIcon : SearchIconLight} alt='SearchIcon' className='searchIcon' />
            <div className='searchText'>SEARCH</div>
          </div>
        </div>
        <div className='lowerSection'>
          <div className='box' onClick={toggleTheme}>
            <img src={theme.isDarkMode ? LightModeIcon : DarkModeIcon} alt='ToggleDarkMode' className='toggleDarkMode' />
          </div>
          <a className='box' href='https://www.optakt.io/' title='Optakt Labs'>
            <img src={theme.isDarkMode ? OptaktLogo : OptaktLogoLight} alt='OptaktLogo' className='logoOptakt' />
          </a>
        </div>
      </div>

      <div className='bodySection'>


        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/currency/:base/:quote" element={<RatePage />} />
        </Routes>
      </div>

      {searchBarOpen && <SearchSideBar />}
    </div >
  );
}

export default MainPage