import { Card } from "./card";

abstract class Action{

    abstract hit(new_card:Card):void
    abstract stand():void
    abstract get_total_cards_value(cards:Card[]):number
    abstract  display_cards():string

}


export {Action}