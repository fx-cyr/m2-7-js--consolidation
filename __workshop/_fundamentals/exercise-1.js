// Exercise 1
//
// Write a function will transform the inputData object into a new shape (As provided below.)

const inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

function transformData(data) {
  powersArray = (firstPower, secondPower) => {
    let superpowers = []
    if (firstPower !== null){
      superpowers.push(firstPower)
    }
    else if (secondPower !== null) {
      superpowers.push(secondPower)
    }
    else {
      return superpowers
    }
  }
  //
  //
  //
  //Relationships section
  let relationships = [
    {
      type: "mother",
      name: inputData.motherName,
      age: inputData.motherAge,
      superpowers: powersArray(inputData.motherSuperpower1, inputData.motherSuperpower2)
    },
    {
      type: "bestfriend",
      name: inputData.bestFriendName,
      age: inputData.bestFriendAge,
      superpowers: powersArray(inputData.bestFriendSuperpower1, inputData.bestFriendSuperpower2)
    },
    {
      type: "girlfriend",
      name: inputData.girleFriendName,
      age: inputData.girlFriendAge,
      superpowers: powersArray(inputData.girlFriendSuperpower1, inputData.girlFriendSuperpower2)
    }
  ]
  //
  //
  
  let mainObj = {
    name: inputData.name,
    age: inputData.age,
    status: inputData.status,
    address: {
      address1: inputData.address1,
      addressCity: inputData.addressCity,
      addressState: inputData.addressState,
      addressCountry: inputData.addressCountry
    },
    superpowers: powersArray(inputData.superpower1, inputData.superpower2) 
  }
  
  mainObj.relationships = relationships
  // Your code here
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
