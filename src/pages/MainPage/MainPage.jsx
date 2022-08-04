import React from 'react'
import './MainPage.scss'
import { useMainContext } from '../../context/MainContext';
import SearchSideBar from '../../components/SearchSideBar/SearchSideBar';
import MainRouter from '../MainRouter';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

function MainPage() {
  const { theme, searchBarOpen } = useMainContext()

  return (
    <div className="App" style={{
      "--backgroundPure": theme.backgroundPure,
      "--background": theme.background,
      "--primary": theme.primary,
      "--secondary": theme.secondary
    }}>

      <Sidebar />

      <div className='bodySection'>
        <MainRouter />
      </div>

      <Footer />

      {searchBarOpen && <SearchSideBar />}
    </div >
  );
}

export default MainPage