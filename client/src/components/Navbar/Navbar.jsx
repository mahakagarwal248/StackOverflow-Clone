import React,{useEffect, useCallback} from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode'

import logo from '../../assets/logo.png';
import search from '../../assets/magnifying-glass-solid.svg';
import Avatar from '../Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => (state.currentUserReducer));

  const handleLogout = useCallback( () => {
    dispatch({type:'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null))
  }, [dispatch, navigate])
  
  useEffect(() => {
    const token = User?.token;
    if(token){
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch,User?.token,handleLogout])
  
  
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to="/" className='nav-item nav-logo'>
                <img src={logo} alt='logo' style={{width:'220px',height:'40px'}} />
            </Link>
            <Link to="/" className='nav-item nav-btn'>About</Link>
            <Link to="/" className='nav-item nav-btn'>Products</Link>
            <Link to="/" className='nav-item nav-btn'>For Teams</Link>
            <form>
              <input type="text" placeholder='Search...' />
              <img src={search} alt='search' width='18' className='search-icon'/>
            </form>
            { User === null ? 
              <Link to='/Auth' className='nav-item nav-links'>Log in</Link>  
              :
              <>
                <Link to={`/Usesr/${User?.result?._id}`} style={{textDecoration:'none', color:'white'}}>
                  <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white">{User.result.name.charAt(0).toUpperCase()}</Avatar>
                </Link>
                <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
              </>
          }
        </div>
    </nav>
  )
}

export default Navbar