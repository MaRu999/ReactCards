import {action, observable} from "mobx";
import Deck from "./Deck";
import Card from "./Card";

export default class Game {
    @observable score = 0;
    @observable usedDeck: Deck = new Deck();

    constructor() {
        this.startGame();
    }

    restartGame(): void {
        this.startGame();
    }

    @action bet(highBet: boolean): void {
        if (highBet) {
            if (this.usedDeck.betHigh()) {
                this.score += 1;
            }
        } else {
            if (this.usedDeck.betLow()) {
                this.score += 1;
            }
        }
    }

    getCurrentCardInDeck(): Card {
        return this.usedDeck.getCurrentCard();
    }

    @action startGame(): void {
        this.score = 0;
        this.usedDeck = new Deck();
        this.usedDeck.createNewDeck();
        this.usedDeck.shuffleDeck();
    }


}