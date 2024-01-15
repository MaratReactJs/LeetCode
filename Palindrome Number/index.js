const x = -121;

var isPalindrome = function (x) {
	const str = String(x).split("").reverse().join("");
	return Number(str) === x;
};

console.log(isPalindrome(x));
