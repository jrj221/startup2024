const DB = require('./database.js');
let players;
let pairings;

(async () => {
    players = await DB.getPlayers();
    newRound();
})();

async function newGame() {
    players = await DB.getPlayers();
} // players is available globally

// returns a map where each player is assigned a target. No two players have each other
function newRound() { // essentially, newRound
    // shuffle the array
    for (let i = players.length - 1; i > 0; i--) { //loop backwards
        const j = Math.floor(Math.random() * (i + 1)); //randomly select an item
        [players[i], players[j]] = [players[j], players[i]]; // Swap items
    }

    // circular target assignment
    pairings = new Map();
    for (let i = 0; i < players.length; i++) {
        // this loop wraps the names in a circle so each name is assigned to the next, the end is assigned to the first
        const assigned_target = players[(i + 1) % players.length]; 
        pairings.set(players[i][0], assigned_target);
    }
    return pairings;
}

// each week, website passes the assigned target to each users page so that they can access it.
async function get_target(user_name) {
    return pairings.get(user_name);
}

// called when a player inputs that they have eliminated their target
function eliminate_player(player) {
    console.log('GM eliminate');
    const index = players.findIndex(p => p[0] === player); // compares against the first index in each sub-array
    if (index !== -1) {
        players.splice(index, 1);
    }
}

module.exports = {
    eliminate_player,
    newRound,
    newGame,
    get_target,
}