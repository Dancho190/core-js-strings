/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  // Проверяем, что значение является строкой
  return typeof value === 'string' ? value.length : 0; // Возвращаем длину строки или 0
}
/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  // Проверяем, является ли значение строкой (примитивом или объектом)
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'Hello', 'World' => 'HelloWorld'
 */
function concatenateStrings(str1, str2) {
  return str1 + str2; // Объединяем две строки с помощью оператора +
}

// Пример использования функции
const result = concatenateStrings('Hello', 'World');
console.log(result); // Вывод: 'HelloWorld'

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  // Проверяем, что значение является строкой и не пустое
  return typeof value === 'string' && value.length > 0 ? value.charAt(0) : ''; // Возвращаем первый символ или пустую строку
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  // Проверяем, что значение является строкой
  return typeof value === 'string' ? value.trim() : ''; // Удаляем пробелы в начале и конце строки
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  // Проверяем, что значение является строкой
  return typeof value === 'string' ? value.replace(/^\s+/, '') : ''; // Удаляем пробелы в начале строки
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  // Проверяем, что значение является строкой
  if (typeof value !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Используем метод trimEnd() для удаления пробелов в конце строки
  return value.trimEnd(); // Удаляем пробелы в конце строки
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  // Проверяем, что str является строкой и times является неотрицательным целым числом
  if (typeof str !== 'string' || typeof times !== 'number' || times < 0) {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  return str.repeat(times); // Используем метод repeat() для повторения строки
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  // Проверяем, что оба аргумента являются строками
  if (typeof str !== 'string' || typeof value !== 'string') {
    return str; // Если один из аргументов не строка, возвращаем исходную строку
  }

  // Находим индекс первого вхождения подстроки
  const index = str.indexOf(value);

  // Если подстрока найдена, удаляем её
  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + value.length);
  }

  // Если подстрока не найдена, возвращаем исходную строку
  return str;
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  // Проверяем, что оба аргумента являются строками
  if (typeof str !== 'string' || typeof value !== 'string') {
    return str; // Если один из аргументов не строка, возвращаем исходную строку
  }

  // Находим индекс последнего вхождения подстроки
  const index = str.lastIndexOf(value);

  // Если подстрока найдена, удаляем её
  if (index !== -1) {
    return str.slice(0, index) + str.slice(index + value.length);
  }

  // Если подстрока не найдена, возвращаем исходную строку
  return str;
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return 0; // Возвращаем 0 для некорректных входных данных
  }

  // Используем метод Array.from() для преобразования строки в массив символов,
  // затем используем reduce для суммирования кодов символов
  return Array.from(str).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  // Проверяем, что оба аргумента являются строками
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false; // Если один из аргументов не строка, возвращаем false
  }

  // Используем метод startsWith() для проверки начала строки
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  // Проверяем, что оба аргумента являются строками
  if (typeof str !== 'string' || typeof substr !== 'string') {
    return false; // Если один из аргументов не строка, возвращаем false
  }

  // Используем метод endsWith() для проверки конца строки
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  // Проверяем, что minutes и seconds являются неотрицательными целыми числами
  if (
    typeof minutes !== 'number' ||
    typeof seconds !== 'number' ||
    minutes < 0 ||
    seconds < 0
  ) {
    throw new Error('Both minutes and seconds must be non-negative integers.');
  }

  // Форматируем минуты и секунды с ведущими нулями
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Возвращаем строку в формате "mm:ss"
  return `${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.'); // Выбрасываем ошибку для некорректных входных данных
  }

  // Используем метод split(), reverse() и join() для реверса строки
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.'); // Выбрасываем ошибку для некорректных входных данных
  }

  // Преобразуем строку в массив символов, сортируем и объединяем обратно в строку
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  // Проверяем, что оба аргумента являются строками
  if (typeof str !== 'string' || typeof substring !== 'string') {
    return false; // Если один из аргументов не строка, возвращаем false
  }

  // Используем метод includes() для проверки наличия подстроки
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return 0; // Возвращаем 0 для некорректных входных данных
  }

  // Определяем регулярное выражение для поиска гласных
  const vowels = /[aeiouyAEIOUY]/g;

  // Находим все вхождения гласных и возвращаем их количество
  const matches = str.match(vowels);

  return matches ? matches.length : 0; // Если совпадения найдены, возвращаем их количество, иначе - 0
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return false; // Если это не строка, возвращаем false
  }

  // Удаляем пробелы и приводим строку к нижнему регистру для корректного сравнения
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Сравниваем очищенную строку с её реверсированной версией
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr; // Возвращаем true, если строки совпадают
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const words = sentence.split(' ');

  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Разбиваем строку на слова, переворачиваем каждое слово и объединяем обратно в строку
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Используем метод split(), map() и join() для инверсии регистра каждого символа
  return str
    .split('')
    .map((char) => {
      // Проверяем, является ли символ буквой и инвертируем его регистр
      if (char === char.toUpperCase()) {
        return char.toLowerCase(); // Если символ в верхнем регистре, преобразуем в нижний
      }
      return char.toUpperCase(); // Если символ в нижнем регистре, преобразуем в верхний
    })
    .join(''); // Объединяем обратно в строку
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  // Используем шаблонные строки для формирования результата
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  // Проверяем, что value является строкой
  if (typeof value !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Используем регулярное выражение для извлечения имени
  const match = value.match(/Hello,\s*(.+?)\s*!/);

  // Если совпадение найдено, возвращаем имя, иначе возвращаем пустую строку
  return match ? match[1] : '';
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Удаляем первые и последние угловые скобки, если они есть
  return str.replace(/^<|>$/g, '');
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return []; // Возвращаем пустой массив для некорректных входных данных
  }

  // Разбиваем строку по точкам с запятой и возвращаем массив
  return str.split(';').map((email) => email.trim());
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  // Проверяем, что str является строкой
  if (typeof str !== 'string') {
    return ''; // Возвращаем пустую строку для некорректных входных данных
  }

  // Функция для кодирования одного символа с использованием ROT13
  const rot13Char = (char) => {
    const ascii = char.charCodeAt(0);
    // Проверяем, является ли символ буквой
    if (ascii >= 65 && ascii <= 90) {
      // Заглавные буквы
      return String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
    }
    if (ascii >= 97 && ascii <= 122) {
      // Строчные буквы
      return String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
    }
    // Если не буква, возвращаем символ без изменений
    return char;
  };

  // Применяем функцию к каждому символу строки и объединяем результат в строку
  return str.split('').map(rot13Char).join('');
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  // Определяем начальную колоду карт
  const deck = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];

  // Проверяем, что value является строкой и находится в колоде
  if (typeof value !== 'string') {
    return -1; // Возвращаем -1 для некорректных входных данных
  }

  // Находим индекс карты в колоде
  const index = deck.indexOf(value);

  return index; // Возвращаем индекс карты, или -1 если не найдено
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
