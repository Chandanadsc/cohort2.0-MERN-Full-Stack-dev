/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySums = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    
    if (categorySums.hasOwnProperty(category)) {
      categorySums[category] += price;
    } else {
     
      categorySums[category] = price;
    }
  });

  
  const result = Object.entries(categorySums).map(([category, totalSpent]) => ({
    category,
    totalSpent
  }));

  return result;
}

var transactions = [
  {
    "id": 1,
    "timestamp": 1656076800000,
    "price": 10,
    "category": 'Food',
    "itemName": 'Pizza',
  },
  {
    "id": 2,
    "timestamp": 16560768000123,
    "price": 15,
    "category": 'Food',
    "itemName": 'Burger',
  },
  {
    "id": 3,
    "timestamp": 1656076801234,
    "price": 30,
    "category": 'Food',
    "itemName": 'Pasta',
  }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory ;
