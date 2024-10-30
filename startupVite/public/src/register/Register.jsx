import React from 'react';

export function Register() {
    return (
        <main className="register">
            <form className="register">
                <div className="form-group">
                <label for="fname">First Name:</label>
                <input type="text" className="register form-control" id="fname" placeholder="John" />
                </div>
                <div className="form-group">
                    <label for="lname">Last Name:</label>
                    <input type="text" className="register form-control" id="lname" placeholder="Doe" />
                </div>
                <div className="form-group">
                    <label for="username">Username:</label>
                    <input type="text" className="register form-control" id="username" placeholder="jd007" />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" className="register form-control" id="password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Register Account</button>
            </form>
        </main>
    );
}