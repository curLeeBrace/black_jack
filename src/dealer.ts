import { Action } from "./action"
import { Card } from "./card."

class Dealer extends Action{

    public dealer_cards:Card[] = []
    


    hit(new_card:Card){

        this.dealer_cards.push(new_card)

        return this.display_cards()
    }

    stand(){




    }

    get_total_cards_value(cards:Card[]):number{

        let total:number = 0

        cards.forEach(card => {
            total += card.card_value
        });

        return total
    }


    display_cards(){
        return this.dealer_cards
    }
      



}



export {Dealer}