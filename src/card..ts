import { CardType, CardInterface} from "./type";

class Card implements CardInterface{

    public static cards = Card.generate_cards()
   


    public card_type:CardType
    public card_name:string
    public card_value:number


    constructor(card_type:CardType, card_name:string, card_value:number){
        this.card_type = card_type
        this.card_name = card_name
        this.card_value = card_value
        
    }


    private static generate_cards():CardInterface[]{
        
        let card_types = ["♥", "♦", "♣", "♠"]
        let cards:CardInterface[] = []


        card_types.forEach((card_type) => {

            for (let index = 0; index < 13; index++) {
                

                if (index == 0) {
                    cards.push({
                        card_name :`A${card_type}`,
                        card_type : card_type as CardType,
                        card_value : 1              
                    })
                }

                if (index>=10){
                    cards.push({
                        card_name : `${index+1}${card_type}`,
                        card_type : card_type as CardType,
                        card_value : 10
                        
                    })
                } else {

                    cards.push({
                        card_name : `${index+1}${card_type}`,
                        card_type : card_type as CardType,
                        card_value : 10
                        
                    })
                }
                
            }
        });

        return cards
    }



}



export {
    Card
}



