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
    let player_bet = Number(promp("Enter Your Bet : "));
    if (player_bet < 0 || isNaN(player_bet)) {
        console.log("Invalid Bet!");
    }
    else {
        player.player_bet = player_bet;
        player.hit();
        dealer.hit();
        player.hit();
        dealer.hit();
        console.log(player.display_cards());
        console.log(dealer.display_cards());
        break;
    }
}
