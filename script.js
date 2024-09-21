// Good Luck 💪🏾
function count(char, str) {
    return str.split(char).length - 1;
}

console.log(count("a", "fikrcamp")); // ➞ 1
console.log(count("c", "bootcamp")); // ➞ 1
console.log(count("o", "fikrcamp coding bootcamp")); // ➞ 3
