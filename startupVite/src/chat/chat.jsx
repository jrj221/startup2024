import React, { useEffect, useState } from 'react';
import { setupWebSocket, sendMessage } from './chatClient.js';  

export function Chat() {
    const [msgPlaceholder, setMsgPlaceholder] = useState('Name Required');

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
                setMsgPlaceholder(chatControls.disabled ? 'Name Required' : 'Enter message...');
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
            <h1>Chat</h1>
            <div className="chat">
                <fieldset id="nameControls">
                    <input id="myName" type="text" placeholder='Name'/>
                </fieldset>
                <div id="chatText"></div>
                <fieldset id="chatControls" disabled>
                    <input id="newMsg" type="text" placeholder={msgPlaceholder}/>
                </fieldset>
            </div>
        </main>
    );
}