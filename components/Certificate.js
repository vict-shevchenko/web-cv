import Period from './Period';
import formatDate from '../helpers/date';

const Certificate = ({name, receiveDate}) => (
	<div className="cv-record">
		<div className="cv-record__heading">
			<div className="cv-record__position">
				<strong>{name}</strong>
			</div>
			<div className="cv-record__dates">
				{formatDate(receiveDate)}
			</div>
		</div>
	</div>	
);

export default Certificate;
