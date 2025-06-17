import { Card } from "./card."
import { Action } from "./action"




class Player extends Action{
    public player_funds:number = 0
    public player_cards:Card[] = []
    public player_bet:number = 0


    hit(new_card:Card){

        this.player_cards.push(new_card)

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
        
        return this.player_cards
    }


}



export {Player}

