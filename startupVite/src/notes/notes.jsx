import React from 'react';

export function Notes() {
    return (
        <main>
            <h1>Notes</h1>
            <p className="comments">
            Could be stored in a database since i want it to be 
            remembered even when the user logins out and visits later
            </p>

            <div className="notes" contentEditable>
                Write notes here. Not functional yet, but will be stored persistently between visits.<br />
                Eventually, with JS I might have placeholder text here the way there is in texarea boxes in forms.
            </div>
        </main>
    );
}