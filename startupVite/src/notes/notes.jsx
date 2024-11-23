import React from 'react';
import { useState, useEffect } from 'react';

export function Notes({userName}) {
    const [notes, setNotes] = useState('');

    const prevNotes = ''; // temp line until prevNotes code is implemented
    useEffect(() => {
        if (notes != prevNotes) {
            async function storeNotes() {
                const personalNotes = {notes: notes, userName: userName};
                console.log(notes); // test
                // may want to explore if this overwrites previous notes or what
                await fetch('/api/updateNotes', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(personalNotes),
                }).catch(error => console.error('Fetch error:', error));
            }
            storeNotes();
        }
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

            <div className="notes" contentEditable onInput={handleInput} suppressContentEditableWarning={true}></div>
        </main>
    );
}