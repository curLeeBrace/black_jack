import { Action } from "./action"
import { Card } from "./card"
import { Actions } from "./type"

class Dealer extends Action{

    public dealer_cards:Card[] = []



    hit(){

        let pick_card:Card
        pick_card = Card.cards[Card.cards.length-1]
        this.dealer_cards.push(pick_card)
        Card.cards.pop()

        return this.display_cards()
    }

    stand(){
        
    }

    get_total_cards_value():number{

        let total:number = 0

        Card.cards.forEach(card => {
            total += card.card_value
        });

        return total
    }



    display_cards(player_action? : string){

        let display : string = ""

        if (player_action == undefined || player_action == "hit"){

            display = `Dealer Hand :${this.dealer_cards[0].card_name} [Hidden]`

        } 
        else {


            let current_cards = this.dealer_cards.map(dealer_card => {

                return ` ${dealer_card.card_name}`
            })


            display = `Dealer Hand :${current_cards} Total : ${this.get_total_cards_value()}`
        }










        return display
    }
      



}



export {Dealer}