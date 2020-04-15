import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import game from "./game/game";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App cardGame={new game()}/>, wrapper) : false;