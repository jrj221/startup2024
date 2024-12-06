import React, { useEffect } from 'react';
import { setupWebSocket, sendMessage } from './chatClient.js';

export function Chat() {
    useEffect(() => {
        const socket = setupWebSocket();

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
            input.removeEventListener('keydown', sendMessage);
            myName.removeEventListener('keyup', sendMessage);
            socket.close();
        };
    }, []);

    return (
        <main>
            <h1>Chats</h1>
            <div className="chat">
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
            </div>
        </main>
    );
}