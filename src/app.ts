import promptSync from 'prompt-sync';
import { Card } from "./card"
import { Player } from './player';
import { Dealer } from './dealer';


const promp = promptSync()

let player = new Player();
let dealer = new Dealer();


while(player.player_funds > 0){
    console.log(`Player's Fund : ₱${player.player_funds}`)
    let player_bet:number = Number(promp("Enter Your Bet : "));


    if(player_bet < 0 || isNaN(player_bet)){
        console.log("Invalid Bet!")
    }
    else{
        player.player_bet = player_bet

        player.hit()
        dealer.hit()
        player.hit()
        dealer.hit()

        console.log(player.display_cards())
        console.log(dealer.display_cards())
        

        break
    }

}

