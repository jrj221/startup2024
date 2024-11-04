// this module needs to be persistently stored so that multiple users 
// across multiple session can access and modify it's information
const players = ['Jack', 'Owen', 'Leyla', 'Kara', 'Nick'];
const user_name = 'Jack';

// called when you sign up for a game
function add_player(player) { 
    players.push(player);
}

// called when a player inputs that they have eliminated their target
function eliminate_player(player) {
    const index = players.findIndex(player);
    players.splice(index, 1);
  }

// returns a map where each player is assigned a target. No two players have each other
function assign_targets(players) {
    // the players list isn't shuffled rn, so technically a player who signs up right before another will be assigned them.
    // this means a friend who sign up at the same time as another might have them as a target. 
    // We probably don't want this, so implement a  shuffle in the future.
    const pairings = new Map();
    for (let i = 0; i < players.length; i++) {
        // this loop wraps the names in a circle so each name is assigned to the next, the end is assigned to the first
        const assigned_target = players[(i + 1) % players.length]; 
        pairings.set(names[i], assigned_target);
    }
    return pairings;
}

// each week, website passes the assigned target to each users page so that they can access it.
function get_target(user_name) {
    return pairings.get(user_name);
}