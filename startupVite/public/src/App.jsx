import Login from "./login.jsx"
import Register from "./register.jsx"
import Chat from "./chat.jsx"
import Leaderboard from "./leaderboard.jsx"
import Notes from "./notes.jsx"

import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "https://cdn.skypack.dev/react-router-dom";
// for some reason the components still work even when I delete the import statement. Where else could they be imported at?

function App() {
  return (   
    <>
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
                  <input className="form-control-sm btn btn-dark" style="width: 75px;" type="submit" value="submit" />
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
          <Route path="/" element={<App />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <main role="main">
          <div className="countdown">
            <span className="unit">YOU HAVE</span><br />
            <span className="time">5 </span><span className="unit">days </span><span className="time">14 </span><span className="unit">hours </span><span className="time">48 </span><span className="unit">seconds</span><br />
            <span className="unit">TO COMPLETE THIS WEEK'S CONTRACT</span>
          </div>
        <div className="target">
            <img className="target_photo" src="target_placeholder.jpg" />
            <p>TOBIAS RIEPER</p>
        </div>

        <p className="comments">
            Does a countdown count as a third party service call?
             Otherwise I'll have a third party call to the weather 
            so you know if you need a rain jacket to go hunt your target &#129335</p>
      </main>
      <footer className="footer">Jack Johnson | <a href="https://github.com/jrj221/startup2024">Github Repo</a></footer>
    </>
  );
}

export default App
