import PositionedCharacter from '../js/PositionedCharacter';
import { generateTeam } from '../js/generators';
import Bowman from '../js/characters/Bowman';
import Swordsman from '../js/characters/Swordsman';
import Magician from '../js/characters/Magician';
import Vampire from '../js/characters/Vampire';
import Undead from '../js/characters/Undead';
import Daemon from '../js/characters/Daemon';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi('prairie');

    const playerTypes = [Bowman, Swordsman, Magician];
    const computerTypes = [Vampire, Undead, Daemon];
    const team = generateTeam(playerTypes, 1, 2);
    const teamComputer = generateTeam(computerTypes, 1, 2);
    let beginPlacePlaeyers = [];
    let beginPlaceComputer = [];
    let numberBeginPlacePlaeyers = 0;
    let numberBeginPlaceComputer = this.gamePlay.boardSize - 2;
    let number = 0;

    for (let i = 0; i < this.gamePlay.boardSize; i++) {
      beginPlacePlaeyers[number] = numberBeginPlacePlaeyers;
      beginPlaceComputer[number] = numberBeginPlaceComputer;
      number = number + 1;
      beginPlacePlaeyers[number] = numberBeginPlacePlaeyers + 1;
      beginPlaceComputer[number] = numberBeginPlaceComputer + 1;
      numberBeginPlacePlaeyers = numberBeginPlacePlaeyers + this.gamePlay.boardSize;
      numberBeginPlaceComputer = numberBeginPlaceComputer + this.gamePlay.boardSize;
      number = number + 1;
    }

    // for (let i = 0; i < 2 * this.gamePlay.boardSize; i++) {
    //   console.log(i + ' ' + beginPlaceComputer[i])
    // }
    let position = [...new Set(beginPlacePlaeyers)];
    let positionComputer = [...new Set(beginPlaceComputer)];
    
    let positionArr = [];
    let positionArrComputer = [];

    for (let i = 0; i < team.characters.length; i++) {
      let positionIndex = Math.round(Math.random() * (2 * this.gamePlay.boardSize - 1));
      let positionIndexComputer = Math.round(Math.random() * (2 * this.gamePlay.boardSize - 1));
      positionArr[i] = position[positionIndex];
      positionArrComputer[i] = positionComputer[positionIndexComputer];
      if (!(i === 0)&&(positionArr[i] === positionArr[i - 1])) {
        positionIndex = Math.round(Math.random() * (2 * this.gamePlay.boardSize - 1));
        positionArr[i] = position[positionIndex];
      }
      if (!(i === 0)&&(positionArr[i] === positionArr[i - 1])) {
        positionIndexComputer = Math.round(Math.random() * (2 * this.gamePlay.boardSize - 1));
        positionArrComputer[i] = positionComputer[positionIndexComputer];
      }
    }

    let positions = [];
    for (let i = 0; i < team.characters.length; i++) {
      let positionsPlayer = new PositionedCharacter(team.characters[i], positionArr[i]);
      let positionsComp = new PositionedCharacter(teamComputer.characters[i], positionArrComputer[i]);
      positions.push(positionsPlayer);
      positions.push(positionsComp);
    }
    
    this.gamePlay.redrawPositions(positions);

    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
