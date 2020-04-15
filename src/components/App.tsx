import * as React from 'react';
import {useState} from "react";
import game from "../game/game";
import {CardComponent} from "./CardComponent";

let cardGame: game = undefined;

export const App = (props: AppProps): JSX.Element => {

        const [card, setCard] = useState(null);
        const [score, setScore] = useState(0);
        const [finished, setFinished] = useState(false);

        if (!cardGame) {
            cardGame = props.cardGame;
            cardGame.startGame();
            setCard(cardGame.getCurrentCardInDeck());
            setScore(cardGame.score);
            setFinished(false);
        }

        const isFinished = () => cardGame.usedDeck.isFinished();
        const getCard = () => cardGame.getCurrentCardInDeck();
        const handleCard = () => {
            setCard(getCard());
        }
        const handleScoring = (): void => {
            setScore(cardGame.score);
        }
        const betLow = (): void => {
            if (isFinished()) {
                setFinished(true);
                return
            }
            cardGame.bet(false);
            handleScoring();
            handleCard();
        }
        const betHigh = (): void => {
            if (isFinished()) {
                setFinished(true)
                return
            }
            cardGame.bet(true);
            handleScoring();
            handleCard();
        }


        const restartGame = () => {
            cardGame.restartGame();
            handleCard();
            handleScoring();
            setFinished(false);
        }


        return (
            <>
                {cardGame && <div>
                    <div>
                        Score: {score}
                    </div>
                    <div>
                        <CardComponent card={card}/>
                    </div>
                    <div>
                        <button disabled={finished} onClick={() => betHigh()}>Bet High</button>
                        <button disabled={finished} onClick={() => betLow()}>Bet Low</button>
                        <button disabled={!finished} onClick={() => restartGame()}>Restart Game</button>
                    </div>
                </div>}
            </>
        )
    }
;

type AppProps = {
    cardGame: game;
}

App.propTypes = {
    cardGame: game
}
