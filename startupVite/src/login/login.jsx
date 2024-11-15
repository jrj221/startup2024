import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    // {} passed in when Login component was rendered in Router
    return (
        <main className="register">
            {authState !== AuthState.Unknown && <h1>Welcome to the Login Page!</h1>} {/* Displays if authState is unknown (hasn't logged in) */}
            {authState === AuthState.Authenticated && (
                <Authenticated 
                    userName={userName} 
                    onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} 
                />
            )} {/* Renders Authenticated component if authState is authenticated. Authenticated takes the props userName, and function onLogout */}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
            )} {/* Renders Unauthenticated if authState is unauthenticated */}
        </main>
    );
}
