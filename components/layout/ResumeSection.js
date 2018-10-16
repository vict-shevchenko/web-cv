const ResumeSection = ({ title, children }) => (
	<div className="resume-section">
		<div className="resume-section__title">
			<h2>{title}</h2>
		</div>
		<div className="resume-section__content">
			{children}
		</div>

		<style jsx>{`
			.resume-section {
				display: flex;
			}

			.resume-section__title {
				flex: 0 0 40%
			}

			.resume-section__title h2 {
				position: sticky;
				top: 0.83em;
			}

			.resume-section__content {
				flex: 0 0 60%;
				padding-left: 16px;
			}
		`}</style>

		<style global jsx>{`

			.resume-section__content > div:first-child {
				margin-top: 54px;
			}
		`}</style>
	</div>
)

export default ResumeSection;
