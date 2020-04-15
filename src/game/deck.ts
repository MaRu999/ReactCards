import card from "./card";
import {action, observable} from "mobx";

export default class deck {
    @observable cards: card[] = [];
    currentIndex: number;
    suiteKeys: string[] = ["♥", "♦", "♠", "♣"]
    usedCards: card[] = [];

    constructor() {
        this.createNewDeck();
        this.shuffleDeck();
    }

    @action createNewDeck(): void {
        let j = 0;
        this.cards = [];
        this.usedCards = [];
        while (j <= 3) {
            let i = 2;
            while (i <= 14) {
                this.cards.push(new card(i, this.suiteKeys[j]))
                i++;
            }
            j++;
        }
        this.currentIndex = this.cards.length - 1;
    }

    @action shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    @action drawCard(): card {
        this.usedCards.push(this.getCurrentCard());
        this.currentIndex -= 1;
        return this.cards.pop();
    }

    isFinished(): boolean {
        return this.cards.length === 1;
    }

    @action betHigh(): boolean {
        const card = this.drawCard();
        return card.value < this.cards[this.currentIndex].value;
    }

    @action betLow(): boolean {
        const card = this.drawCard();
        return card.value > this.cards[this.currentIndex].value;
    }

    getCurrentCard(): card {
        return this.cards[this.currentIndex];
    }
}
