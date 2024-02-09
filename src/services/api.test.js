import { waitFor } from '@testing-library/react';
import { fetchTransactions, mockTransactions } from './api.js';

describe('fetchTransactions', () => {
  it('fetches transactions correctly', async () => {
	const promise = fetchTransactions();
	
	await waitFor(() => {
	  expect(promise).resolves.toEqual(mockTransactions);
	});
  });
});
