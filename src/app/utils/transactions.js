// utils/transactions.js

// Get all transactions from localStorage
export function getTransactions() {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : [];
  }
  return [];
}

// Add a new transaction and save it
export function addTransaction(newTx) {
  if (typeof window !== "undefined") {
    const existing = getTransactions();
    const updated = [...existing, newTx];
    localStorage.setItem('transactions', JSON.stringify(updated));
  }
}
