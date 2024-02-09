import { POINTS_THRESHOLD_1, POINTS_THRESHOLD_2 } from './constants.js';

export const calculatePoints = (amount) => {
  if (!amount) {
	return 0
  }
  if (amount >= POINTS_THRESHOLD_1 && amount <= POINTS_THRESHOLD_2) {
	return Math.floor(amount);
  }
  if (amount > POINTS_THRESHOLD_2) {
	return POINTS_THRESHOLD_1 + 2 * (Math.floor(amount) - POINTS_THRESHOLD_2);
  }
  return 0
};

export const calculateRewardPoints = (transactions) => {
  if (!transactions) {
	return {}
  }
  const monthlyPoints = {};
  const totalPoints = {};
  
  // Get the date three months ago from the current date
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  
  transactions.forEach((transaction) => {
	const { customerId, amount, date } = transaction;
	const transactionDate = new Date(date);
	
	// Check if the transaction is within the last three months
	if (transactionDate >= threeMonthsAgo) {
	  const transactionMonth = transactionDate.getMonth() + 1; // Months are zero-indexed
	  
	  // Calculate points for the transaction
	  const points = calculatePoints(amount);
	  
	  // Update monthly points for the customer
	  if (!monthlyPoints[customerId]) {
		monthlyPoints[customerId] = {};
	  }
	  
	  if (!monthlyPoints[customerId][transactionMonth]) {
		monthlyPoints[customerId][transactionMonth] = 0;
	  }
	  
	  monthlyPoints[customerId][transactionMonth] += points;
	  
	  // Update total points for the customer
	  if (!totalPoints[customerId]) {
		totalPoints[customerId] = 0;
	  }
	  
	  totalPoints[customerId] += points;
	}
  });
  
  return { monthlyPoints, totalPoints };
};


