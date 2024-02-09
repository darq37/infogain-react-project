import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchTransactions } from './services/api';
import { describe, expect, it } from 'vitest';

vi.mock('./services/api', () => ({
  fetchTransactions: vi.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
	fetchTransactions.mockClear();
  });
  
  it('renders Loading component', async () => {
	render(<App />);
	expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  
  it('handles data fetching error', async () => {
	fetchTransactions.mockRejectedValueOnce(new Error('Data fetching error'));
	
	render(<App />);
	
	expect(fetchTransactions).toHaveBeenCalledTimes(1);
  });
});
