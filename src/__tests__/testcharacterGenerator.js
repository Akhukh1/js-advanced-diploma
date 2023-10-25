import { characterGenerator } from '../js/generators';
import { generateTeam } from '../js/generators';
import Bowman from '../js/characters/Bowman';
import Swordsman from '../js/characters/Swordsman';
import Magician from '../js/characters/Magician';

test('test characterGenerator level 1', () => {
  const playerTypes = [Bowman, Swordsman, Magician];
  const playersGenerator = characterGenerator(playerTypes, 1);
  const result = playersGenerator.next().value;
  expect(result.level).toEqual(1);
});

test('test generateTeam', () => {
  const playerTypes = [Bowman, Swordsman, Magician];
  const result = generateTeam(playerTypes, 1, 2);
  expect(result.characters[0].type).toEqual(1);
});