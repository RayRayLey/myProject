function totalOfSpendings(customerSpendingsArray) {
  let total = 0;
  customerSpendingsArray.forEach((i) => {
    total += i;
  });
  return total;
}

let topCustomerSpendings = [10000, 20000, 30000];
console.log(totalOfSpendings(topCustomerSpendings));
