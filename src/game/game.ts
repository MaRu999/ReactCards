import deck from "./deck";
import card from "./card";

export default class game {
    score: number = 0;
    usedDeck: deck = new deck();

    constructor() {
        this.startGame();
    }

    restartGame(): void {
        this.startGame();
    }

    bet(highBet: boolean): void {
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

    startGame(): void {
        this.score = 0;
        this.usedDeck = new deck();
        this.usedDeck.createNewDeck();
        this.usedDeck.shuffleDeck();
    }
}