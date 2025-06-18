import promptSync from 'prompt-sync';
import { Card } from "./card"
import { Player } from './player';
import { Dealer } from './dealer';
import { Actions } from './type';


const promp = promptSync()

let player = new Player();
let dealer = new Dealer();


while(player.player_funds > 0){
    console.log(`Player's Fund : ₱${player.player_funds}`)
    // placing bet
    let player_bet:number = Number(promp("Enter Your Bet : "));

    // check if bet is valid
    if(player_bet < 0 || isNaN(player_bet)){
        console.log("Invalid Bet!")
    }
    else{

        // distribute card to player and dealer 
        player.player_bet = player_bet

        player.hit()
        dealer.hit()
        player.hit()
        dealer.hit()
        console.log(player.display_cards())
        console.log(dealer.display_cards())


        let player_action:string = ""

        while(player_action !== "stand"){

            player_action = promp("Your action hit or stand? : ");
            if(player_action =="hit"){
                player.hit()
                console.log(player.display_cards())
                 // check if player card is greater than 21 then if, it cause bust/lose
                if(player.is_player_bust()){
                    player_action = "bust"
                    console.log(dealer.display_cards(player_action))
                    

                    break // exit to this loop if the player is bust
                }


            } else {
                console.log("Invalid Action")
            }

        }
      


        
    }

}

