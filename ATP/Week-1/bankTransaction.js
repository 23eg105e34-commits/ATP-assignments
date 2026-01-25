const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//all credit transactions
const creditTransactions = transactions.filter(
  transaction => transaction.type === "credit"
);
console.log("Credit Transactions:", creditTransactions);
//extract only transaction amounts
const amounts = transactions.map(
  transaction => transaction.amount
);
console.log("Transaction Amounts:", amounts);
//calculate final account balance
const finalBalance = transactions.reduce((balance, transaction) => {
  return transaction.type === "credit"
    ? balance + transaction.amount
    : balance - transaction.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);
//first debit transaction
const firstDebit = transactions.find(
  transaction => transaction.type === "debit"
);
console.log("First Debit Transaction:", firstDebit);
//index of transaction with amount 10000
const indexOf10000 = transactions.findIndex(
  transaction => transaction.amount === 10000
);
console.log("Index of Amount 10000:", indexOf10000);
