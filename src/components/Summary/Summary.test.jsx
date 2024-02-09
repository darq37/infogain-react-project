import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Summary from './Summary';
import { calculateRewardPoints } from '../../utils/utils.js';

describe('Summary Component', () => {
  const transactions = [
	{ customerId: 1, amount: 120, date: '2024-01-15' },
	{ customerId: 2, amount: 80, date: '2024-01-20' }
  ];
  
  it('renders without crashing', () => {
	render(<Summary transactions={ transactions }/>);
  });
  
  it('displays summary information correctly', () => {
	const { getByText } = render(<Summary transactions={ transactions }/>);
	
	expect(getByText('Summary')).toBeInTheDocument();
	expect(getByText('Customer ID: 1')).toBeInTheDocument();
	expect(getByText('Customer ID: 2')).toBeInTheDocument();
  });
  
  it('calculates reward points correctly', () => {
	
	const mockTransactions = [
	  { customerId: 1, amount: 120, date: '2024-01-15' },
	  { customerId: 2, amount: 80, date: '2024-01-20' },
	  { customerId: 2, amount: 130, date: '2023-12-20' }
	];
	
	const result = calculateRewardPoints(mockTransactions);
	expect(result).toEqual({
	  1: {
		January: 90,
		totalPoints: 90
	  }, 2: {
		January: 80,
		December: 110,
		totalPoints: 190
	  }
	});
  });
});
