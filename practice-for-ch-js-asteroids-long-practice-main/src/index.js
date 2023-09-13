import MovingObject from "./moving-object.js";
import Game from "./game.js";
import GameView from "./game-view.js";

window.MovingObject = MovingObject;
window.Game = Game

const canvasEl = document.getElementById('game-canvas');
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const ctx = canvasEl.getContext('2d');

const gameView = new GameView(ctx);

gameView.start();