var longestCommonPrefix = function (strs) {
	if (strs.length === 0) {
		return "";
	}

	// Используем первую строку как базовую для сравнения
	const baseString = strs[0];

	// Проходим по каждому символу базовой строки сравнивая его с currentChar
	for (let i = 0; i < baseString.length; i++) {
		const currentChar = baseString[i];

		// Проверяем, есть ли текущий символ в каждой строке массива
		for (let j = 1; j < strs.length; j++) {
			if (i === strs[j].length || strs[j][i] !== currentChar) {
				// Если достигли конца строки или текущий символ не совпадает, возвращаем префикс
				return baseString.substring(0, i);
			}
		}
	}

	// Если прошли через все символы базовой строки, возвращаем её полностью
	return baseString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
