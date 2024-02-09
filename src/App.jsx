import React, { useEffect, useState } from 'react';
import './App.css';
import Transactions from './components/Transactions/Transactions.jsx';
import Summary from './components/Summary/Summary.jsx';
import { fetchTransactions } from './services/api.js';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
	const fetchData = async () => {
	  setLoading(true)
	  try {
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
  
  
  if (loading) {
	return (
	  <div>
		<div className="loader"/>
		Loading...
	  </div>)
  }
  
  return (
	<div className="App">
	  <Transactions transactions={ transactions }/>
	  <Summary transactions={ transactions }/>
	</div>
  );
};

export default App;
