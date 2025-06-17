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

                else if (index>=10){
                   
                    let high_card_name = ""

                    if(index == 10) high_card_name = "J"
                    if (index == 11) high_card_name = "Q"
                    if (index == 12) high_card_name = "K"

                    cards.push({
                        card_name : `${high_card_name}${card_type}`,
                        card_type : card_type as CardType,
                        card_value : 10
                        
                    })


                } else {

                    cards.push({
                        card_name : `${index+1}${card_type}`,
                        card_type : card_type as CardType,
                        card_value : index+1
                        
                    })
                }
                
            }
        });

        Card.shuffle_cards(cards)


        return cards
    }




    public static shuffle_cards(cards:CardInterface[]){

        cards.forEach((card, index) => {
            let temp:CardInterface
            let random_index = Math.floor(Math.random() * cards.length);
            
            temp = cards[index]
            cards[index] = cards[random_index]
            cards[random_index] = temp

        });

    }



}








export {
    Card
}



