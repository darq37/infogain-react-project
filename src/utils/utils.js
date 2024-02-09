import { POINTS_THRESHOLD_1, POINTS_THRESHOLD_2 } from './constants.js';

export const formatter = new Intl.DateTimeFormat('eng', { month: 'long' });

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

export  const normalizeMonth = (month) => formatter.format(new Date(2001, month, 1));

export const calculateRewardPoints = (transactions) => {
  if (!transactions) {
	return {}
  }
  const monthlyPoints = {};
  
  const today = new Date();
  const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
  
  transactions.forEach((transaction) => {
	const { customerId, amount, date } = transaction;
	const transactionDate = new Date(date);
	
	if (transactionDate >= threeMonthsAgo) {
	  const transactionMonth = transactionDate.getMonth();
	  const points = calculatePoints(amount);
	  
	  if (!monthlyPoints[customerId]) {
		monthlyPoints[customerId] = {};
	  }
	  
	  const monthName = normalizeMonth(transactionMonth);
	  if (!monthlyPoints[customerId][monthName]) {
		monthlyPoints[customerId][monthName] = 0;
	  }
	  
	  monthlyPoints[customerId][monthName] += points;
	  
	  if (!monthlyPoints[customerId].totalPoints) {
		monthlyPoints[customerId].totalPoints = 0;
	  }
	  
	  monthlyPoints[customerId].totalPoints += points;
	}
  });
  
  return monthlyPoints;
};
