export class Game {
  public id: string; 
  public gameTitle: string; 
  public players: Player[];
}
export class Player {
  public name: string; 
  public role: Roles; 
}
export enum Roles {
  Narrator,
  Werewolf,
  Townfolk,
  Witch
}