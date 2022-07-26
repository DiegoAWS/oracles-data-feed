
import './App.scss';
import { useMainContext } from './context/MainContext';
import Dashboard from './components/Dashboard/Dashboard';

import OptaktLogo from './assets/optakt-icon.svg';
import OptaktLogoLight from './assets/optakt-icon-light.png';
import DarkModeIcon from './assets/moon-solid.svg'
import LightModeIcon from './assets/sun-solid.svg'
import SearchIcon from './assets/magnifying-glass-solid.svg'
import SearchIconLight from './assets/magnifying-glass-solid-light.svg'

import SearchSideBar from './components/SearchSideBar/SearchSideBar';

function App() {
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
          <div className='box'>
            <img src={theme.isDarkMode ? OptaktLogo : OptaktLogoLight} alt='OptaktLogo' className='logoOptakt' />
          </div>
          <div className='box' onClick={toggleSearchBar}>
            <img src={theme.isDarkMode ? SearchIcon : SearchIconLight} alt='SearchIcon' className='searchIcon' />
          </div>
        </div>
        <div className='lowerSection'>
          <div className='box' onClick={toggleTheme}>
            <img src={theme.isDarkMode ? LightModeIcon : DarkModeIcon} alt='ToggleDarkMode' className='toggleDarkMode' />
          </div>
          <div className='box'>
            <img src={theme.isDarkMode ? OptaktLogo : OptaktLogoLight} alt='OptaktLogo' className='logoOptakt' />
          </div>
        </div>
      </div>

      <div className='bodySection'>
        <Dashboard />
      </div>

      {searchBarOpen && <SearchSideBar />}
    </div>
  );
}

export default App;
