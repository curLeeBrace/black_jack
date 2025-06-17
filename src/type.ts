
type CardType = "♥" | "♦" | "♣" |"♠"

interface CardInterface {
    card_type : CardType
    card_name  : string
    card_value : number
}

type Actions = "hit" | "stand"








export {
    CardInterface,
    Actions,
    CardType

}


