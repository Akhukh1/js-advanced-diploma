/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
import Team from '../js/Team'

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  function choiceCharacter(allowedTypes, maxLevel) {
    let index = Math.round(Math.random() * (allowedTypes.length - 1));
    let level = Math.round(Math.random() * (maxLevel - 1)) + 1;
    return Object.create(new allowedTypes[index](level));
  }
  while (true) {
    yield choiceCharacter(allowedTypes, maxLevel);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  let characters =[];
  const playersGenerator = characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount; i++) {
    characters[i] = playersGenerator.next().value;
  }
  return new Team(characters);
}
