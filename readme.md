# Алгоритмічна задача: Пошук найдовшого паліндромного підмасиву

## Опис задачі
Написати функцію, яка приймає масив чисел і знаходить найдовший підмасив, який читається однаково зліва направо і справа наліво (є паліндромом).

## Приклад:
```javascript
Input: [1, 2, 3, 3, 2, 1, 4, 5]
Output: [1, 2, 3, 3, 2, 1]
```

Для наглядності. Знайдено найдовший паліндромний підмасив `Output` в середині масиву `Input`

## Розв'язок
```javascript
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
```

## Аналіз розв'язку
### Чому обрано саме цю задачу:

1. Задача демонструє розуміння роботи з масивами - ключовою структурою даних в JavaScript
2. Розв'язок включає оптимізований підхід "розширення навколо центру"
3. Задача показує вміння працювати з індексами та зрізами масивів
4. Розв'язок демонструє навички оптимізації алгоритмів

### Time Complexity (Часова складність):

- O(n²), де n - довжина вхідного масиву
- Для кожного елементу масиву (n) ми потенційно можемо розширюватися до меж масиву (n)

### Space Complexity (Просторова складність):

- O(1) для основного алгоритму (не враховуючи масив, що повертається)
- Використовується лише кілька змінних для зберігання індексів та довжини
- O(k) для результуючого масиву, де k - довжина знайденого паліндрому

### Тести
```javascript
console.log(findLongestPalindromicSubarray([1, 2, 3, 3, 2, 1, 4, 5])); // [1, 2, 3, 3, 2, 1]
console.log(findLongestPalindromicSubarray([1, 2, 2, 1])); // [1, 2, 2, 1]
console.log(findLongestPalindromicSubarray([1, 2, 3, 4, 5])); // [1]
```

