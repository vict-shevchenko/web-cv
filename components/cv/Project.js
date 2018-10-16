import Period from '../helpers/Period';
import ReactMarkdown from 'react-markdown';
import Indent from '../layout/Indent';

const Project = ({name, shortDescription, description, startDate, endDate, isCurrent, responsibilities, technologies}) => (
	<div className="cv-record">
		<div className="cv-record__heading">
			<div>
				✅<strong>{name}</strong> {shortDescription ? `(${shortDescription})` : ''}
			</div>
			<div className="cv-record__dates">
				<Period from={startDate} to={endDate} isCurrent={isCurrent} />
			</div>
		</div>
		<Indent>
			<div>
				<ReactMarkdown source={description} />
			</div>
			{responsibilities && <div>
				<i>Responsibilities:</i>
				<ReactMarkdown source={responsibilities} />
			</div>}
			<div>
				<i>Technologies and tools:</i><br/>
				<p>{technologies}</p>
			</div>
		</Indent>
	</div>	
);

export default Project;
