import React from 'react';
import { useState, useEffect } from 'react';

export function Notes() {

    const [notes, setNotes] = useState('');
    useEffect(() => {
        console.log(`Notes: ${notes}`);
    }, [notes]);

    const handleInput = (e) => {
        setNotes(e.currentTarget.textContent);
    };

    return (
        <main>
            <h1>Notes</h1>
            <p className="comments">
            Could be stored in a database since i want it to be 
            remembered even when the user logins out and visits later
            </p>

            <div className="notes" contentEditable onInput={handleInput}></div>
        </main>
    );
}