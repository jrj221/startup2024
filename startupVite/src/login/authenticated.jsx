import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
          <div className="login_buttons">
            <Button variant='primary' className="login_button" onClick={() => navigate('/index')}>
              Go to Home
            </Button>
            <Button variant='secondary' className="login_button" onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
    );
}
