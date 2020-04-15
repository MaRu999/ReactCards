import deck from "./deck";
import card from "./card";
import {action, observable} from "mobx";

export default class game {
    @observable score: number = 0;
    @observable usedDeck: deck = new deck();

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

    getCurrentCardInDeck(): card {
        return this.usedDeck.getCurrentCard();
    }

    @action startGame(): void {
        this.score = 0;
        this.usedDeck = new deck();
        this.usedDeck.createNewDeck();
        this.usedDeck.shuffleDeck();
    }


}