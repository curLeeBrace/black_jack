"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
const action_1 = require("./action");
const card_1 = require("./card");
class Dealer extends action_1.Action {
    constructor() {
        super(...arguments);
        this.dealer_cards = [];
    }
    hit() {
        let pick_card;
        pick_card = card_1.Card.cards[card_1.Card.cards.length - 1];
        this.dealer_cards.push(pick_card);
        card_1.Card.cards.pop();
        return this.display_cards();
    }
    stand() {
    }
    get_total_cards_value() {
        let total = 0;
        card_1.Card.cards.forEach(card => {
            total += card.card_value;
        });
        return total;
    }
    display_cards() {
        let display = "";
        if (this.dealer_cards.length > 1) {
            display = `Dealer Hand :${this.dealer_cards[0].card_name} [Hidden]`;
        }
        else {
            let current_cards = this.dealer_cards.map(dealer_card => {
                return ` ${dealer_card.card_name}`;
            });
            display = `Dealer Hand :${current_cards} Total : ${this.get_total_cards_value()}`;
        }
        return display;
    }
}
exports.Dealer = Dealer;
