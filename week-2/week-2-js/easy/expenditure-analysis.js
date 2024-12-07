function calculateTotalSpentByCategory(transactions) {
  // Create a map to store total spent by category
  const categoryMap = new Map();

  // Iterate through each transaction
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const { category, price } = transaction;

    // Update the total spent for the category
    if (categoryMap.has(category)) {
      categoryMap.set(category, categoryMap.get(category) + price);
    } else {
      categoryMap.set(category, price);
    }
  }

  // Convert the map to an array of objects
  const result = [];
  for (const [category, totalSpent] of categoryMap) {
    result.push({ category, totalSpent });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
