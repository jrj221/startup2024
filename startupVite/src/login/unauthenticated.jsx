import React from 'react';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
      }
    
      async function createUser() { // PAGE CURRENTLY ONLY SUPPORTS LOGIN, NOT CREATE
        loginOrCreate(`/api/auth/create`);
      }

      async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, { // waits for the request to complete before proceeding
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }), //this is how the endpoints have access to email and password
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) { // executes if the response status was 200 (success) ? means that it won't throw an error if it's undefined
          localStorage.setItem('userName', userName); //locally stores this info
          props.onLogin(userName); // executes the onAuthChange arrow function we passed in in login.jsx. This updates the userName and authState states (to authenticated)
        } else {
          const body = await response.json();
          setDisplayError(`⚠ Error: ${body.msg}`); // sends the "Unauthorized" msg seen in index.js if the response isn't sucessful 
        }
      }
    
    return (
        <form className="register">
            <div className="form-group">
                <label for="username">Username:</label>
                <input 
                    type="text" className="register form-control" 
                    id="username" value={userName} 
                    onChange={(e) => setUserName(e.target.value)} placeholder="jd007@email.com" // e.target.value represents the value attribute of the tag causing the onChange handler (the input tag)
                />
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input 
                    type="password" className="register form-control" 
                    onChange={(e) => setPassword(e.target.value)} id="password" 
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>
                Login
            </button>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </form>
    )
}
