import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    // {} passed in when Login component was rendered in Router
    return (
        <main className="register">
            {authState === AuthState.Authenticated && (
                <>
                    <h1 className="welcome">Welcome, Agent {userName}</h1>
                    <Authenticated 
                        userName={userName} 
                        onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} 
                    />
                </>
            )} {/* Renders Authenticated component if authState is authenticated. Authenticated takes the props userName, and function onLogout */}
            {authState === AuthState.Unauthenticated && (
                <>
                    <h1 className="welcome">Welcome, Agent</h1>
                    <Unauthenticated
                        userName={userName}
                        onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                        }}
                    />
                </>
            )} {/* Renders Unauthenticated if authState is unauthenticated */}
        </main>
    );
}
