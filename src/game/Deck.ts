import {action, observable} from "mobx";
import Card from "./Card";

export default class Deck {
    @observable cards: Card[] = [];
    currentIndex: number;
    suiteKeys: string[] = ["♥", "♦", "♠", "♣"]
    usedCards: Card[] = [];

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
                this.cards.push(new Card(i, this.suiteKeys[j]))
                i++;
            }
            j++;
        }
        this.currentIndex = this.cards.length - 1;
    }

    @action shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    @action drawCard(): Card {
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

    getCurrentCard(): Card {
        return this.cards[this.currentIndex];
    }
}
