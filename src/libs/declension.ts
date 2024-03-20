/**
 * https://gist.github.com/termi/7081408
 * Склонение существительных
 * Правильная форма cуществительного рядом с числом (счетная форма).
 *
 * @example declension("файл", "файлов", "файла", 0);//returns "файлов"
 * @example declension("файл", "файлов", "файла", 1);//returns "файл"
 * @example declension("файл", "файлов", "файла", 2);//returns "файла"
 *
 * @param {string} oneNominative единственное число (именительный падеж)
 * @param {string} severalGenitive множественное число (родительный падеж)
 * @param {string} severalNominative множественное число (именительный падеж)
 * @param {(string|number)} number количество
 * @returns {string}
 */
export default function declension(oneNominative: string, severalGenitive: string, severalNominative: string, number: number): string {
	number = number % 100;
  if (number <= 14 && number >= 11)
    return severalGenitive
  if ((number %= 10) < 5) {
    if (number > 2)
      return severalNominative
    if (number === 1)
      return oneNominative
    if (number === 0)
      return severalGenitive
    return severalNominative
  }
  else
    return severalGenitive
}
