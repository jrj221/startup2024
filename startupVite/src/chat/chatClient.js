// Adjust the webSocket protocol to what is being used for HTTP (this sends the upgrade request)
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
let socket;

export function setupWebSocket() {
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    // Display that we have opened the webSocket
    socket.onopen = (event) => {
        appendMsg('system', 'websocket', 'connected');
    };

    // Display messages we receive
    socket.onmessage = async (event) => {
        const text = await event.data.text();
        const chat = JSON.parse(text);
        appendMsg('friend', chat.name, chat.msg);
    };

    // If the webSocket is closed then disable the interface
    socket.onclose = (event) => {
        appendMsg('system', 'websocket', 'disconnected');
        document.querySelector('#nameControls').disabled = true;
        document.querySelector('#chatControls').disabled = true;
    };

    return socket;
}

// Send a message over the webSocket
export function sendMessage() {
  const msgEl = document.querySelector('#newMsg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#myName').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chatText');
    const chatEl = document.createElement('div');
    if (cls == 'me') {
        chatEl.className='outgoing';
    }
    chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
    chatText.append(chatEl);
    chatText.scrollTop = chatText.scrollHeight;
}