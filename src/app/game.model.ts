export class Game {
  public gameid: string; 
  public players: Player[];
}
export class Player {
  public name: string; 
  public role: string; 
}
export enum Roles {
  Narrator,
  Werewolf,
  Townfolk,
  Witch
}