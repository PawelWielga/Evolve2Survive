export class Player {
    constructor(
        public id: string,
        public playerName: string,
        public wins: number,
        public loses: number,
    ) { }
}

export class PlayerLogIn {
    constructor(
        public playerName: string,
        public password: string,
    ) { }
}