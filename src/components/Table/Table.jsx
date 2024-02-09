import { useId } from 'react';
import './Table.scss';

const Table = ({ tableName, headers, data }) => {
  if (!data || !headers) {
	return null
  }
  return <div className="table">
	<h2 className="table__name">{ tableName }</h2>
	<table className="table__container">
	  <thead>
	  <tr className="header">
		{ headers.map((header) => (
		  <th style={ { width: header.width } } id={ header.key } key={ header.key }>{ header.name }</th>)) }
	  </tr>
	  </thead>
	  <tbody>
	  { data.length === 0 && (<tr>
		<td>No data</td>
	  </tr>) }
	  { data.map((obj) =>
		(<tr key={ useId() }>
		  { Object.values(obj).map((v) =>
			(<td key={ useId() }>
			  { v }
			</td>)) }
		</tr>)) }
	  </tbody>
	</table>
  </div>
}

export default Table;
