import Warrior from "./classes/Warrior"
import Mage from "./classes/Mage"

// Initialize the game
const player1 = new Warrior("John Doe");
const player2 = new Mage("Sarah Doe");

// Round 1
player1.attack(player2);
player2.attack(player1);
player1.status();
player2.status();

// Round 2
player1.attack(player2);
player2.heal();
player1.status();
player2.status();

// Round 3
player1.attack(player2);
player2.attack(player1);
player1.status();
player2.status();

// Round 4
player1.attack(player2);
player2.attack(player1);
player1.status();
player2.status();
