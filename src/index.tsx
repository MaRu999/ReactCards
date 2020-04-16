import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import Game from "./game/Game";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App cardGame={new Game()}/>, wrapper) : false;