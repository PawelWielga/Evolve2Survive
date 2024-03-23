import { UserRoles } from "../_enums/user.roles.enum";

export class Player {
    constructor(
        public id: string,
        public playerName: string,
        public wins: number,
        public loses: number,
        public role: UserRoles,
    ) { }
}

export class PlayerLogIn {
    constructor(
        public playerName: string,
        public password: string,
    ) { }
}

export class PlayerLogInResponse {
    constructor(
        public token: string,
        public player: Player,
    ) { }
}

export class PlayerRegister {
    constructor(
        public playerName: string,
        public password: string,
        public confirmpPassword: string,
    ) { }
}