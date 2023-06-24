import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CountdownTimer from '../partials/CountdownTimer';

const Concert = () => {
  let navigate = useNavigate();

  useEffect(() => {
   if(!localStorage.getItem('token')){
    return navigate('/login');
   }
  }, []);


  return (
    <React.Fragment>
      <h1>Concert</h1>
      <CountdownTimer countDownDate="2023/06/24" ></CountdownTimer>
      <Link onClick={() => {
        localStorage.clear()
      }} to='/login' preventScrollReset={true}>Login</Link>
    </React.Fragment>
  )
}

export default Concert