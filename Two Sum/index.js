const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
	// Создаем хэш-таблицу для хранения чисел и их индексов
	const numIndices = new Map();

	// Проходим по массиву чисел
	for (let i = 0; i < nums.length; i++) {
		// Вычисляем комплемент текущего числа, необходимый для достижения цели
		const complement = target - nums[i];

		// Проверяем, есть ли комплемент в хэш-таблице
		if (numIndices.has(complement)) {
			console.log([numIndices.get(complement), i]);
			return [numIndices.get(complement), i];
		}

		// Если комплемент не найден, добавляем текущее число и его индекс в хэш-таблицу
		numIndices.set(nums[i], i);
	}

	// Если не найдено решение, возвращаем пустой массив
	return [];
};

console.log(twoSum(nums, target));
