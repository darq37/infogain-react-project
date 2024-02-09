import Table from '../Table/Table.jsx';

const Transactions = ({ transactions }) => {
  const headers = [
	{ key: 'id', name: 'Id' },
	{ key: 'customerId', name: 'Customer Id' },
	{ key: 'amount', name: 'Amount' },
	{ key: 'date', name: 'Date', width: '200px' }
  ];
  
  return (
	<div className="transaction-list">
	  <Table data={ transactions } headers={ headers } tableName="Transactions"/>
	</div>
  );
};

export default Transactions;
