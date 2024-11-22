import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Leaderboard } from './leaderboard/leaderboard';
import { Login } from './login/login';
import { Notes } from './notes/notes';
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
      </nav>
      
      <Routes>
        <Route path="/index" element={<Home userName={userName} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/notes" element={<Notes userName={userName} />} />
        <Route path="/" element={<Login 
          userName={userName}
          authState={authState}
          onAuthChange={(userName, authState) => {
            setAuthState(authState);
            setUserName(userName);
          }}
          // onAuthChange is a function passed in to Login that it uses to change AuthState upon logout. It takes an arrow function as a
          />} />
      </Routes>

      <footer className="footer">Jack Johnson | <a href="https://github.com/jrj221/startup2024">Github Repo</a></footer>
    </BrowserRouter>
  );
}
