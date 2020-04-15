import * as React from 'react';
import game from "../game/game";
import {CardComponent} from "./CardComponent";
import {observer} from "mobx-react";
import {autorun} from "mobx";

let cardGame: game = new game();

autorun(() => {
    console.log(cardGame.score);
})

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
                        <button disabled={cardGame.usedDeck.isFinished()} onClick={():void => cardGame.bet(true)}>Bet High</button>
                        <button disabled={cardGame.usedDeck.isFinished()} onClick={():void => cardGame.bet(false)}>Bet Low</button>
                        <button disabled={!cardGame.usedDeck.isFinished()} onClick={():void => cardGame.restartGame()}>Restart Game</button>
                    </div>
                </div>
            </>
        )
    })
;

type AppProps = {
    cardGame: game;
}


