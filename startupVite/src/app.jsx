import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Leaderboard } from './leaderboard/leaderboard';
import { Login } from './login/login';
import { Notes } from './notes/notes';
import { Register } from './register/register';
import { AuthState } from './login/authState';

import './stylesheet.css';

export default function App() {
  // if userName is in localStorage, its associated value is set to userName. Otherwise, it's initialized to an empty string.
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  // currentAuthState is assigned Authenticated or Unauthenticated based on if userName is truthy or falsy (has a value or not)
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (   
    <BrowserRouter>
      <nav className="desktop-view navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/"><h3>Senior Assassin</h3></Link>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link className="nav-link px-2" to="/chat">Chat</Link></li>
            <li><Link className="nav-link px-2" to="/leaderboard">Leaderboard</Link></li>
            <li><Link className="nav-link px-2" to="/notes">Notes</Link></li>
        </ul>
        <div className="text-end">
            <form>
                <input className="form-control-sm" type="text" placeholder="username" />
                <input className="form-control-sm" type="password" placeholder="password" />
                <input className="form-control-sm btn btn-dark" style={{ width: '75px' }} type="submit" value="submit" />
            </form>
            <button className="form-control-sm register"><Link to="/register">register</Link></button>
        </div>
      </nav>
      <nav className="mobile-view navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Senior Assassin</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            {/* DROPDOWN ISN'T WORKING FOR MOBILE VIEW */}
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/chat">Chat</Link></li>
                  <li><Link className="dropdown-item" to="/leaderboard">Leaderboard</Link></li>
                  <li><Link className="dropdown-item" to="/notes">Notes</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/index" element={<Home userName={userName} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Login 
          userName={userName}
          authState={authState}
          onAuthChange={(userName, authState) => {
            setAuthState(authState);
            setUserName(userName);
          }}
          // onAuthChange is a function passed in to Login that it uses to change AuthState upon logout. It takes an arrow function as a
          />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer className="footer">Jack Johnson | <a href="https://github.com/jrj221/startup2024">Github Repo</a></footer>
    </BrowserRouter>
  );
}
