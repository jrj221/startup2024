import { json } from 'express';
import React from 'react';
import { useState, useEffect } from 'react';

export function Notes({ userName }) {
    
    const[prevNotes, setPrevNotes] = useState('')
    const [notes, setNotes] = useState('');

    useEffect(() => {
        async function retrieveNotes() {
            const response = await fetch(`/api/getNotes?userName=${userName}`);
            const jsonResponse = await response.json();
            const notesString = jsonResponse.notes;
            setPrevNotes(notesString); 
        }
        retrieveNotes(); // Call the async function inside useEffect
      }, []);


    useEffect(() => {
        if (notes != prevNotes) {
            async function storeNotes() {
                const personalNotes = {notes: notes, userName: userName};
                // may want to explore if this overwrites previous notes or what
                await fetch('/api/updateNotes', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(personalNotes),
                });
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


            <div className="notes" contentEditable onInput={handleInput}>{prevNotes ? prevNotes : ''}</div>
        </main>
    );
}