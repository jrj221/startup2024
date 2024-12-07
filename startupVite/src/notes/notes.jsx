import React from 'react';
import { useState, useEffect, useRef } from 'react';

export function Notes({userName}) {
    const [notes, setNotes] = useState('');
    const notesRef = useRef(null);

    useEffect(() => {
        async function retrieveNotes() {
            try {
              const response = await fetch(`/api/getNotes?userName=${userName}`);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const notesData = await response.json();
              console.log(notesData); // test
              if (notesData.length == 0) { // no documents returned
                setNotes('Write notes here');
                return;
              }
              setNotes(notesData[0].notes);
            } catch (error) {
              console.error('Error retrieving notes:', error);
            }
          }
          retrieveNotes();
      }, []);

      useEffect(() => {
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
    }, [notes]);

    const handleInput = (e) => {
        setNotes(e.currentTarget.textContent);
    };

    useEffect(() => { // this effect hook continuously puts the cursor back at the end of the rendered notes content
        if (notesRef.current) {
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(notesRef.current);
          range.collapse(false); // Move cursor to end
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }, [notes]);

    return (
        <main>
            <h1>Notes</h1>
            <div className="notes" contentEditable onInput={handleInput} suppressContentEditableWarning={true} ref={notesRef}>{notes}</div>
        </main>
    );
}