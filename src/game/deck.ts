import card from "./card";

export default class deck {
    cards: card[] = [];
    currentIndex: number;
    suiteKeys: string[] = ["♥", "♦", "♠", "♣"]
    usedCards: card[] = [];

    constructor() {
        this.createNewDeck();
        this.shuffleDeck();
    }

    createNewDeck(): void {
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

    shuffleDeck(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    drawCard(): card {
        this.usedCards.push(this.getCurrentCard());
        this.currentIndex -= 1;
        return this.cards.pop();
    }

    isFinished(): boolean {
        return this.cards.length === 1;
    }

    betHigh(): boolean {
        const card = this.drawCard();
        return card.value < this.cards[this.currentIndex].value;
    }

    betLow(): boolean {
        const card = this.drawCard();
        return card.value > this.cards[this.currentIndex].value;
    }

    getCurrentCard(): card {
        return this.cards[this.currentIndex];
    }
}
