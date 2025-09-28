/************************************************************
Task 1: Using forEach()
-----------------------
1. Create an array of five of your favorite cities.
2. Use forEach( ) to log each city name to the console in uppercase.
3. Submit the output format by adding comments to the code.
 */

const cities = ['Mountain View', 'Sunnyvale', 'Pal Alto', 'Menlo Park', 'San Mateo'];
console.log('\nMy favorite cities:');
cities.forEach((city) => console.log(`  - ${city}`));

/************************************************************
Task 2: Transforming with map()
-------------------------------
1. Create an array called numbers with the numbers 1-5.
2. Use map( ) to create an array where each number is squared. Call this array
squares.
3. Log the new array.
4. Submit the output by adding comments to the code.
 */

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num ** 2);
console.log(`\n${numbers} squared is: ${squares}`);

/************************************************************
Task 3: Filtering with filter()
-------------------------------
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
100.
2. Use filter ( ) to create a new array containing only the scores greater than or
equal to 80. Call this array highScores.
3. Log the new array.
4. Submit the output by adding comments to the code.
 */

const scores = [85, 42, 90, 75, 30, 100];
const highScores = scores.filter((score) => score >= 80);
console.log(`\nOf ${scores}, the high scores are ${highScores}`);

/************************************************************
Task 4: Finding with find() and findIndex()
1. Create an array called favoriteFood that contains a list of your favorite
dishes. Try to add 5 or 6 elements.
2. Use find() to locate the first food with more than 4 letters.
3. Use findIndex( ) to find the index of that fruit.
 */

const favoriteFoods = ['Salmon', 'Steak', 'Eggs', 'Avocado', 'Blueberries', 'Arugula'];
let foodItem = favoriteFoods.find((food) => food.length > 4);
let foodIndex = favoriteFoods.indexOf(foodItem);
console.log('\nMy Favorite Foods:');
favoriteFoods.forEach((food) => console.log(`  - ${food}`));
console.log(`The first food item with more than 4 characters is ${foodItem} at index ${foodIndex}`);
console.log('\n');
