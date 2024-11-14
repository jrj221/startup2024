import React from 'react';

export function Chat() {
    return (
        <main>
            <h1>Chats</h1>
            <p className="comments">
                WebSocket data will be here since I want the chats to update 
                in realtime when other users send replies.
            </p>

            <div className="chats">
                <div className="chat_name">Allison</div>
                <div className="chat_name">Dave</div>
                <div className="chat_name">James</div>
                <div className="chat_name">Bailey</div>
                <div className="chat_name">Emilio</div>
                <div className="chat_name">Bob</div>
                <div className="chat_name">Robbie</div>
                <div className="chat_name">Lloyd</div>
                <div className="chat_name">Jack</div>
            </div>
            <div className="chats_mobile dropdown show">
                <a className="chats_button btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Chats
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Allison</a>
                <a className="dropdown-item" href="#">Dave</a>
                <a className="dropdown-item" href="#">James</a>
                <a className="dropdown-item" href="#">Bailey</a>
                <a className="dropdown-item" href="#">Emilio</a>
                <a className="dropdown-item" href="#">Bob</a>
                <a className="dropdown-item" href="#">Robbie</a>
                <a className="dropdown-item" href="#">Lloyd</a>
                <a className="dropdown-item" href="#">Jack</a>
                </div>
            </div>

            <div className="current_chat">
                <div className="outgoing"><p className="outgoing">Hello World!</p></div>
                <div className="incoming"><p className="incoming">Hello User!</p></div>
                <div className="outgoing"><p className="outgoing">How ya doin</p></div>
                <div className="incoming"><p className="incoming">Pretty good, how bout yourself?</p></div>
                <div className="outgoing"><p className="outgoing">meh</p></div>
                <div className="incoming"><p className="incoming">Are you enjoying this class?</p></div>
                <div className="outgoing"><p className="outgoing">sometimes</p></div>
                <div className="incoming"><p className="incoming">Sounds about right</p></div>
                <div className="outgoing"><p className="outgoing">wanna have a bbq?</p></div>
                <div className="incoming"><p className="incoming">Sho, how bout tonight?</p></div>
                <div className="outgoing"><p className="outgoing">yep sounds good</p></div>
                <div className="incoming"><p className="incoming">see you then!</p></div>
                <div><input type="text" placeholder="message" className="message" /></div>
            </div>
        </main>
    );
}