const ingredients = [
  'eggs',
  'milk',
  'flour',
  'sugar',
  'baking soda',
  'baking powder',
  'chocolate chips',
  'bananas'
]

// Write a while loop that prints out the contents of ingredients:

let i = 0

while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}
// Write a for loop that prints out the contents of ingredients:

for (let n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reverseArray = ingredients.reverse()
for (let y = 0; y < reverseArray.length; y++) {
  console.log(reverseArray[y])
}
