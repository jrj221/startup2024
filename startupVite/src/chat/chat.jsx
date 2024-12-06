import React, { useEffect } from 'react';
import { sendMessage } from './chatClient.js';

export function Chat() {
    useEffect(() => {
        const input = document.querySelector('#newMsg');
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        const chatControls = document.querySelector('#chatControls');
        const myName = document.querySelector('#myName');
        if (chatControls && myName) {
            myName.addEventListener('keyup', (e) => {
                chatControls.disabled = myName.value === '';
            });
        }

        // Cleanup to remove event listeners when component unmounts
        return () => {
            if (input) input.removeEventListener('keydown', sendMessage);
            if (myName) myName.removeEventListener('keyup', sendMessage);
        };
    }, []);  // Empty dependency array triggers on mount

    return (
        <main>
            <h1>Chats</h1>
            <p>
                WebSocket data will be here since I want the chats to update 
                in realtime when other users send replies.
            </p>
            <div>
                <fieldset id="nameControls">
                    <legend>My Name</legend>
                    <input id="myName" type="text" />
                </fieldset>
            </div>
            <fieldset id="chatControls" disabled>
                <legend>Chat</legend>
                <input id="newMsg" type="text" />
                <button onClick={sendMessage}>Send</button>
            </fieldset>
            <div id="chatText"></div>
        </main>
    );
}