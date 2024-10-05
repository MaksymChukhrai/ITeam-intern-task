Input: [1, 2, 3, 3, 2, 1, 4, 5]
Output: [1, 2, 3, 3, 2, 1]

// Розв'язок
function findLongestPalindromicSubarray(arr) {
    let start = 0;
    let maxLength = 1;
    
    // Функція для розширення навколо центру
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    
    // Перевіряємо кожен елемент як потенційний центр паліндрому
    for (let i = 0; i < arr.length; i++) {
        // Для непарної довжини
        expandAroundCenter(i, i);
        // Для парної довжини
        expandAroundCenter(i, i + 1);
    }
    
    return arr.slice(start, start + maxLength);
}

console.log(findLongestPalindromicSubarray([1, 2, 3, 3, 2, 1, 4, 5])); // [1, 2, 3, 3, 2, 1]
console.log(findLongestPalindromicSubarray([1, 2, 2, 1])); // [1, 2, 2, 1]
console.log(findLongestPalindromicSubarray([1, 2, 3, 4, 5])); // [1]

