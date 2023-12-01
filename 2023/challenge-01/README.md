# 🎄🎁 Challenge #1: First gift repeated!

In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

### Examples:

```javascript
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```
