"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const card_1 = require("./card");
const action_1 = require("./action");
class Player extends action_1.Action {
    constructor() {
        super(...arguments);
        this.player_funds = 200;
        this.player_cards = [];
        this.player_bet = 0;
    }
    hit() {
        let pick_card;
        pick_card = card_1.Card.cards[card_1.Card.cards.length - 1];
        this.player_cards.push(pick_card);
        card_1.Card.cards.pop();
        return this.display_cards();
    }
    stand() {
    }
    get_total_cards_value() {
        let total = 0;
        this.player_cards.forEach(card => {
            total += card.card_value;
        });
        return total;
    }
    display_cards() {
        let current_cards = this.player_cards.map(player_card => {
            return ` ${player_card.card_name}`;
        });
        return `Your Hand :${current_cards} Total : ${this.get_total_cards_value()}`;
    }
}
exports.Player = Player;
