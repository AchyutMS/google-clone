import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../components/Search';

import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import { AccountCircle } from '@mui/icons-material';

function Home() {
  return (
    <div className='home'>

      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>

        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon fontSize='large'/>
          <AccountCircle fontSize='large'/>
        </div>
      </div>
      
      <div className='home__body'>
        <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt=''/>

        <div className='home__inputContainer'>
          <Search />
        </div>
      </div>

    </div>
  )
}

export default Home