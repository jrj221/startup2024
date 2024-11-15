import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated(props) {
    const navigate = useNavigate();
  
    function logout() {
      fetch(`/api/auth/logout`, {
        method: 'delete',
      })
        .catch(() => {
          // Logout failed. Assuming offline
        })
        .finally(() => {
          localStorage.removeItem('userName');
          props.onLogout(); // triggers onAuthChange which updates authState (to unauthenticated)
        });
    }
    
    return (
        <div>
          <div>{props.userName}</div>
          <Button variant='primary' onClick={() => navigate('/home')}>
            Go to Home
          </Button>
          <Button variant='secondary' onClick={() => logout()}>
            Logout
          </Button>
        </div>
    );
}
