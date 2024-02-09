import { useId, useMemo } from 'react';
import { calculateRewardPoints } from '../../utils/utils.js';
import './summary.css';

const Summary = ({ transactions }) => {
  const summary = useMemo(() => calculateRewardPoints(transactions), [transactions.length])
  
  return <div className="summary">
	<h2>Summary</h2>
	<div className="statistics">
	  { Object.entries(summary).map(([customerId, sum]) =>
		(<div key={ useId() }>
		  Customer ID: { customerId }
		  <hr/>
		  <div>
			{ Object.entries(sum).map(([key, value]) => (
			  <div key={useId()}>{ key }:{ value }</div>
			)) }
		  </div>
		</div>)) }
	</div>
  
  </div>
}

export default Summary;
