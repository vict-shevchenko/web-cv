import Period from '../helpers/Period';
import Project from './Project';

const Company = ({ name, description, position, startDate, endDate, isCurrent, projects, logo }) => (
	<div className="company">
		<div className="cv-record__heading">
			<div className="company__heading">
				<img src={logo && logo.fields && logo.fields.file ? logo.fields.file.url : ''} alt="" className="company__logo" />
				<div>
					<div className="company__position" >{position}</div>
					<div className="company__name">at {name}</div>
				</div>
			</div>
			<div className="cv-record__dates">
				<Period from={startDate} to={endDate} isCurrent={isCurrent} />
			</div>
		</div>
{/* 		<div>
			{description}
		</div> */}

		{/* <h4>Projects:</h4> */}

		{projects.map(project => <Project key={project.sys.id} {...project.fields} />)}


		<style jsx>{`
			.company {
				margin-top: 32px;
				margin-bottom: 32px;
			}

			.company__heading {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}

			.company__position {
				font-size: 24px;
				font-weight: bold;
			}

			.company__name {
				color: #b0b0b0;
			}

			.company__logo {
				width: 120px;
			}
		`}</style>
	</div>
);

export default Company;
