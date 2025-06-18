"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const player_1 = require("./player");
const dealer_1 = require("./dealer");
const promp = (0, prompt_sync_1.default)();
let player = new player_1.Player();
let dealer = new dealer_1.Dealer();
while (player.player_funds > 0) {
    console.log(`Player's Fund : ₱${player.player_funds}`);
    // placing bet
    let player_bet = Number(promp("Enter Your Bet : "));
    // check if bet is valid
    if (player_bet < 0 || isNaN(player_bet)) {
        console.log("Invalid Bet!");
    }
    else {
        // distribute card to player and dealer 
        player.player_bet = player_bet;
        player.hit();
        dealer.hit();
        player.hit();
        dealer.hit();
        console.log(player.display_cards());
        console.log(dealer.display_cards());
        let player_action = "";
        while (player_action !== "stand") {
            player_action = promp("Your action hit or stand? : ");
            if (player_action == "hit") {
                player.hit();
                console.log(player.display_cards());
                // check if player card is greater than 21 then if, it cause bust/lose
                if (player.is_player_bust()) {
                    player_action = "bust";
                    console.log(dealer.display_cards(player_action));
                    break; // exit to this loop if the player is bust
                }
            }
            else {
                console.log("Invalid Action");
            }
        }
    }
}
