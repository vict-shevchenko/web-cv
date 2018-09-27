import Period from './Period';

const Education= ({name, description, startDate, endDate}) => (
	<div>
		<div className="cv-record__heading">
			<div className="cv-record__position">
				<strong>{name}</strong>
			</div>
			<div className="cv-record__dates">
				<Period from={startDate} to={endDate} isCurrent={false} />
			</div>
		</div>
		<div>
			{description}
		</div>
	</div>	
);

export default Education;
