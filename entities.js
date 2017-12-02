// Function to return a bullet
function Bullet(s, sp) {
    
    // Return a bullet object
    return {shape: s, speed: sp}
    
}

// Function to return an enemy
function Enemy(s, bs, br) {
    
    // Return the enemy object
    return {shape: s, bSpeed: bs, bRadius: br}
    
}

// Function to return a player
function Player(s, bs, br) {
    
    
    // Return the player object
    return {shape: s, bSpeed: bs, bRadius: br}
}