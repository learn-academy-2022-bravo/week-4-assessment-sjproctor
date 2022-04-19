// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("hello", () => {
//   it("returns a string that says hi", () => {
//     expect(hello()).toEqual("hi")
//   })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("contentShuffler", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(contentShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(contentShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// ReferenceError: contentShuffler is not defined

// function - contentShuffler
// parameter - array
// slice first index
// array.sort(() => Math.random() - 0.5) - Math.random() creates the random number, by subtracting .5 we can get a negative number or a positive number randomly, sort will treat negative and positive numbers differently

const contentShuffler = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5)
}


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(minAndMax(nums1)).toEqual([-8, 90])
    expect(minAndMax(nums2)).toEqual([5, 109])
  })
})

// ReferenceError: minAndMax is not defined

// function - minAndMax
// parameter - array
// Math.max and Math.min and pass all the values in the array with a spread operator

// b) Create the function that makes the test pass.

const minAndMax = (array) => {
  return [Math.min(...array), Math.max(...array)]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("removeDuplicates", () => {
  it("that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(removeDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// ReferenceError: removeDuplicates is not defined

// function - removeDuplicates
// parameter - array1, array2


// b) Create the function that makes the test pass.
