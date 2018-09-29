import Period from './Period';
import Project from './Project';
import Indent from "./Indent";

const Company = ({ name, description, position, startDate, endDate, isCurrent, projects }) => (
	<div className="company">
		<div className="cv-record__heading">
			<div className="cv-record__position">
				<strong>✅{position}</strong> in {name}
			</div>
			<div className="cv-record__dates">
				<Period from={startDate} to={endDate} isCurrent={isCurrent} />
			</div>
		</div>
		<div>
			{description}
		</div>

		<h4>Projects:</h4>
		<Indent>
			{projects.map(project => <Project key={project.sys.id} {...project.fields} />)}
		</Indent>

		<style jsx>{`
			.company {
				margin-top: 32px;
				margin-bottom: 32px;
			}
		`}</style>
	</div>
);

export default Company;
