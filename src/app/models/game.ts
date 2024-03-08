import { Player } from "../models/player"

export class Game {
    constructor(
        public id: string,
        public player1: Player,
        public player2: Player,
    ) { }
}