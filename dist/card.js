"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(card_type, card_name, card_value) {
        this.card_type = card_type;
        this.card_name = card_name;
        this.card_value = card_value;
    }
    static generate_cards() {
        let card_types = ["♥", "♦", "♣", "♠"];
        let cards = [];
        card_types.forEach((card_type) => {
            for (let index = 0; index < 13; index++) {
                if (index == 0) {
                    cards.push({
                        card_name: `A${card_type}`,
                        card_type: card_type,
                        card_value: 1
                    });
                }
                else if (index >= 10) {
                    let high_card_name = "";
                    if (index == 10)
                        high_card_name = "J";
                    if (index == 11)
                        high_card_name = "Q";
                    if (index == 12)
                        high_card_name = "K";
                    cards.push({
                        card_name: `${high_card_name}${card_type}`,
                        card_type: card_type,
                        card_value: 10
                    });
                }
                else {
                    cards.push({
                        card_name: `${index + 1}${card_type}`,
                        card_type: card_type,
                        card_value: index + 1
                    });
                }
            }
        });
        Card.shuffle_cards(cards);
        return cards;
    }
    static shuffle_cards(cards) {
        cards.forEach((card, index) => {
            let temp;
            let random_index = Math.floor(Math.random() * cards.length);
            temp = cards[index];
            cards[index] = cards[random_index];
            cards[random_index] = temp;
        });
    }
}
exports.Card = Card;
Card.cards = Card.generate_cards();
