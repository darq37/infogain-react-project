import React from 'react';
import { render } from '@testing-library/react';
import Transactions from './Transactions';

describe('Transactions Component', () => {
  const transactions = [
	{ id: 1, customerId: 101, amount: 50, date: '2024-01-15' },
	{ id: 2, customerId: 102, amount: 75, date: '2024-01-20' },
  ];
  
  it('renders Transactions correctly with data', () => {
	const { getByText } = render(<Transactions transactions={transactions} />);
	
	expect(getByText('Transactions')).toBeInTheDocument();
	expect(getByText('Id')).toBeInTheDocument();
	expect(getByText('Customer Id')).toBeInTheDocument();
	expect(getByText('Amount')).toBeInTheDocument();
	expect(getByText('Date')).toBeInTheDocument();
	expect(getByText('1')).toBeInTheDocument();
	expect(getByText('101')).toBeInTheDocument();
	expect(getByText('50')).toBeInTheDocument();
  });
  
  it('renders "No data" when transactions are empty', () => {
	const { getByText } = render(<Transactions transactions={[]} />);
	
	expect(getByText('Transactions')).toBeInTheDocument();
	expect(getByText('No data')).toBeInTheDocument();
  });
});
