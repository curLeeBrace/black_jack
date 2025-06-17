import { Card } from "./card"
import { Action } from "./action"


class Player extends Action{

    public player_funds:number = 200
    public player_cards:Card[] = []
    public player_bet:number = 0
   





    hit(){
        let pick_card:Card
        pick_card = Card.cards[Card.cards.length-1]
        this.player_cards.push(pick_card)

        Card.cards.pop()

        return this.display_cards()
    }



    stand(){


    }

    get_total_cards_value():number{

        let total:number = 0

        this.player_cards.forEach(card => {
            total += card.card_value
        });

        return total
    }

    display_cards():string{

        let display = ""
        let current_cards = this.player_cards.map(player_card => {

            return ` ${player_card.card_name}`
        })

        if(this.get_total_cards_value() < 21){
            display = `Your Hand :${current_cards} Total : ${this.get_total_cards_value()}`
        } else {
            display = `Your Hand :${current_cards} Total : ${this.get_total_cards_value()} -> Bust!`
        }


        return display
    }

    is_player_bust():boolean{

        let is_bust = false
        if(this.get_total_cards_value() < 21){
            is_bust = false
        } else {
             is_bust = true
        }

        return is_bust
    }




}



export {Player}

