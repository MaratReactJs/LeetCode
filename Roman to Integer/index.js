const s = "MCMXCIV";

var romanToInt = function (s) {
	// Хэш-таблица для отображения римских символов в числовые значения
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < s.length; i++) {
		// Получаем числовое значение текущего символа
		const currentNumeral = romanNumerals[s[i]];

		// Если следующий символ больше текущего, вычитаем текущее значение
		// (учитывая исключения, например, "IV" или "IX")
		if (i < s.length - 1 && romanNumerals[s[i + 1]] > currentNumeral) {
			result -= currentNumeral;
		} else {
			// Иначе, прибавляем текущее значение
			result += currentNumeral;
		}
	}

	return result;
};

console.log(romanToInt(s));
