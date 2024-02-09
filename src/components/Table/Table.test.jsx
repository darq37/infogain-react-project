import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  const headers = [
	{ key: 'name', name: 'Name', width: '100px' },
	{ key: 'age', name: 'Age', width: '80px' },
  ];
  
  const data = [
	{ id: 1, name: 'John Doe', age: 30 },
	{ id: 2, name: 'Jane Doe', age: 25 },
  ];
  
  it('renders table correctly with data', () => {
	const { getByText } = render(<Table tableName="Test Table" headers={headers} data={data} />);
	
	expect(getByText('Test Table')).toBeInTheDocument();
	expect(getByText('Name')).toBeInTheDocument();
	expect(getByText('Age')).toBeInTheDocument();
	expect(getByText('John Doe')).toBeInTheDocument();
	expect(getByText('25')).toBeInTheDocument();
  });
  
  it('renders "No data" when data is empty', () => {
	const { getByText } = render(<Table tableName="Empty Table" headers={headers} data={[]} />);
	
	expect(getByText('Empty Table')).toBeInTheDocument();
	expect(getByText('No data')).toBeInTheDocument();
  });
});
