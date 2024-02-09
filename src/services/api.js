const fetchTransactions = () => {
  return new Promise((resolve) => {
	setTimeout(() => {
	  const transactions = [
		{ id: 1, customerId: 1, amount: 120, date: '2024-01-15' },
		{ id: 2, customerId: 2, amount: 80, date: '2024-01-20' },
		{ id: 3, customerId: 1, amount: 60, date: '2024-02-10' },
		{ id: 4, customerId: 2, amount: 110, date: '2024-02-25' },
		{ id: 5, customerId: 1, amount: 90, date: '2024-03-05' },
		{ id: 6, customerId: 1, amount: 120, date: '2024-02-01' },
		{ id: 7, customerId: 1, amount: 130, date: '2024-02-02' },
		{ id: 8, customerId: 1, amount: 130.2, date: '2024-02-02' },
		{ id: 9, customerId: 1, amount: 130.99, date: '2022-02-02' },
		{ id: 10, customerId: 1, amount: 131, date: '2024-02-02' },
		{ id: 11, customerId: 1, amount: 131.99, date: '2024-02-02' },
		{ id: 12, customerId: 1, amount: 132, date: '2024-02-02' },
		{ id: 13, customerId: 1, amount: 90, date: '2024-02-03' },
		{ id: 14, customerId: 1, amount:undefined, date: '2024-02-03' },
		{ id: 15, customerId: 1, amount:null, date: '2024-02-03' },
		{ id: 16, customerId: 1, amount: 30, date: '2024-02-04' },
		{ id: 17, customerId: 1, amount: 50, date: '2024-02-05' },
		{ id: 18, customerId: 3, amount: 50, date: '2023-12-05' },
	  ];
	  resolve(transactions);
	}, 1000);
  });
};

export { fetchTransactions };
