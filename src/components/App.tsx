import * as React from 'react';
import {CardComponent} from "./CardComponent";
import {observer} from "mobx-react";
import {autorun} from "mobx";
import Game from "../game/Game";

let cardGame: Game = new Game();

autorun(() => {
    console.log("Current score: " + cardGame.score);
    console.log("Cards still remaining: " + (cardGame.usedDeck.cards.length - 1));
    console.log("Cards used: " + (cardGame.usedDeck.usedCards.length + 1));
});

export const App = observer((props: AppProps): JSX.Element => {

        if (!cardGame) {
            cardGame = props.cardGame;
            cardGame.startGame();
        }

        return (
            <>
                <div>
                    <div>
                        Score: {cardGame.score}
                    </div>
                    <div>
                        <CardComponent card={cardGame.getCurrentCardInDeck()}/>
                    </div>
                    <div>
                        <button disabled={cardGame.usedDeck.isFinished()} onClick={(): void => cardGame.bet(true)}>Bet High</button>
                        <button disabled={cardGame.usedDeck.isFinished()} onClick={(): void => cardGame.bet(false)}>Bet Low</button>
                        <button disabled={!cardGame.usedDeck.isFinished()} onClick={(): void => cardGame.restartGame()}>Restart Game</button>
                    </div>
                </div>
            </>
        )
    })
;

type AppProps = {
    cardGame: Game;
}


