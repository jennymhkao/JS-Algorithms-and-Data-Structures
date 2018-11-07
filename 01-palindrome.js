/* Return true if the given string is palindrome, otherwise, return false. Note: remove all non-alphanumeric character and turn everything into the same case */

function palindrome(str) {
	return str.replace(/[\W_]/g, '').toLowerCase() ===
		   str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye");

//using the regex to replace any white space or non-alphanumeric characters with nothing or null, which essentially removes them from the string
//next, chain .toLowerCase() to remove any capital letters because A is different character than a.
//next, take the string and .split() it, .reverse() it, and finally .join() back together
//check that the string is the same forwards and backwards and return the result