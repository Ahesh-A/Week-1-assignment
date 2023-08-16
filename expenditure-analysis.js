/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = []
  transactions.forEach(element => {
    let filter = 
     ans.find((e) => {
      if(e[element.category]) {
        return e;        
      } 
    });
    if(filter) filter[element.category] += element.price;  
    else ans.push({[element.category] : element.price});       
  });
  console.log(ans);
  //return ans;

}
calculateTotalSpentByCategory(
  [{
    itemName: 'item1',
    price: 10,
    category: 'a'
  },
  {
    itemName: 'item2',
    price: 11,
    category: 'b'
  },
  {
    itemName: 'item1',
    price: 100,
    category: 'a'
  },
  {
    itemName: 'item1',
    price: 190,
    category: 'b'
  },
]
)
module.exports = calculateTotalSpentByCategory;
