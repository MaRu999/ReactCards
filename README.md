# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index.

## Using the game
Bet high -> bet that the next card is higher than the current one, e.g. there is a 2 -> you bet high -> the next card is a 5 -> you get a point.
Bet low -> bet that the next card is lower in value than the current one, e.g. there is a King -> you bet low -> the next card is a 7 -> you get a point.
Restarting the game is only possible after it has finished (all cards were used).
In the current implementation, cards with the same value give no points (since they are not truly higher/lower).

## The used cards
Since I was not sure whether simply making sure each card is only played once is enough for the instruction "Keep track of the already played cards of the deck", 
I added an array to the deck that keeps track of the already used cards. It is only there because I was not sure whether that was meant or not.

## Logging
The mobx-autorun is used to log the current score, the remaining cards and the used cards. 
Please note that the first card displayed is counted as used right away, so the remaining cards will start at 51 and the used cards will start at 1.