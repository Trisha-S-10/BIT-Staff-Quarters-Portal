import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [route, setRoute] = useState(null);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (user === 'admin@gmail.com') {
      setRoute('admin');
    } else {
      setRoute('user');
    }

    setUser('');
    setPwd('');
  };

  return (
    <div className="login-page">
      {route === 'admin' && <Navigate to="../AccessChoice" />}
      {route === 'user' && <Navigate to="../UserHome" />}
      {!route && (
        <div className="login-container">
          <div className="login-card">
            <h2 style={{textAlign:"center"}}>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username: </label>
              <input
                ref={userRef}
                type='text'
                id='username'
                className='login-input'
                autoComplete='on'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                placeholder="Username"
              />
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                className='login-input'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                placeholder="Password"
              />
              
              <button className='login-btn'>LOGIN</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;