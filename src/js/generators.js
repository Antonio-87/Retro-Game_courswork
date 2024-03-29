import Team from "./Team";
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
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const randomHeroes =
    allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  const randomLevel = Math.floor(Math.random() * maxLevel) + 1;

  while (true) yield new randomHeroes(randomLevel);
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
  let teamList = [];
  for (let i = 0; teamList.length < characterCount; i++) {
    let character = characterGenerator(allowedTypes, maxLevel);
    if (teamList.find((el) => el.type === character.next().value.type)) {
      teamList.pop(teamList.length - 1);
    }
    teamList.push(character.next().value);
  }
  return new Team(teamList);
}
