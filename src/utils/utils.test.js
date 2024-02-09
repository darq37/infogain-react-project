import {
  calculatePoints,
  normalizeMonth,
  calculateRewardPoints,
} from './utils';


describe('calculatePoints', () => {
  it('calculates points correctly for different amounts', () => {
	expect(calculatePoints(0)).toBe(0);
	expect(calculatePoints(75)).toBe(75);
	expect(calculatePoints(120)).toBe(90);
	expect(calculatePoints(130.2)).toBe(110);
  });
  
  it('returns 0 for falsy amounts', () => {
	expect(calculatePoints(null)).toBe(0);
	expect(calculatePoints(undefined)).toBe(0);
	expect(calculatePoints(0)).toBe(0);
  });
});

describe('normalizeMonth', () => {
  it('normalizes month correctly', () => {
	// Assuming January is represented as 0
	expect(normalizeMonth(0)).toBe('January');
	expect(normalizeMonth(6)).toBe('July');
	expect(normalizeMonth(11)).toBe('December');
  });
});

describe('calculateRewardPoints', () => {
  it('calculates reward points correctly for transactions', () => {
	const transactions = [
	  { customerId: 1, amount: 120, date: '2024-01-15' },
	  { customerId: 2, amount: 80, date: '2024-01-20' },
	  { customerId: 1, amount: 60, date: '2024-02-10' },
	];
	
	const result = calculateRewardPoints(transactions);
	
	expect(result).toEqual({
	  '1': {
		'January': 90,
		'February': 0,
		'totalPoints': 90,
	  },
	  '2': {
		'January': 0,
		'totalPoints': 0,
	  },
	});
  });
  
  it('returns an empty object for empty transactions', () => {
	const result = calculateRewardPoints([]);
	expect(result).toEqual({});
  });
  
});
