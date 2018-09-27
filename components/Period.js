import formatDate from '../helpers/date';

const Period = ({from, to, isCurrent}) => (
	<div className="period">
		{formatDate(from)}  ➡️  {isCurrent ? 'Current' : formatDate(to)}

		<style jsx>{`
			.period {
				color: #ccc;
			}
		`}</style>
	</div>	
);

export default Period;
