import { useEffect, useMemo, useState } from 'react';
import { fetchTransactions } from '../services/api';
import { calculatePoints, calculateRewardPoints } from '../utils/utils.js';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  useEffect(() => {
	const fetchData = async () => {
	  setLoading(true)
	  try {
		// Simulate an asynchronous API call
		const data = await fetchTransactions();
		setTransactions(data);
	  } catch (error) {
		console.error('Error fetching data:', error);
	  } finally {
		setLoading(false);
	  }
	};
	fetchData();
	
	return () => setLoading(false)
  }, []);
  const { monthlyPoints, totalPoints } = useMemo(
	() => calculateRewardPoints(transactions), [transactions.length])
  
  console.log(monthlyPoints);
  console.log(totalPoints);
  
  return (
	<div>
	  <h2>Transaction List</h2>
	  { loading ? (<div>
		<div className="loader" />
		loading...</div>) : (<ul>
		{ transactions.map((transaction) => (
		  <li key={ transaction.id }>
			{ `Customer ${ transaction.customerId }:
			 $${ !!transaction.amount ? transaction.amount : 0 } -
			  Earned ${ calculatePoints(transaction.amount) } points, on date: ${ transaction.date }` }
		  </li>
		)) }
	  </ul>) }
	
	</div>
  );
};

export default TransactionList;
