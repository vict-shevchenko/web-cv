import Header from './Header'

const Layout = (props) => (
	<div>
		<Header />
		<div className="content">
			{props.children}
		</div>

		<style jsx>{`
			.content {
				max-width: 992px;
				margin: 0 auto 32px;
				padding: 24px;
			}
    `}</style>

		<style jsx global>{`
			a {
				box-sizing: border-box;
			}

      body {
				margin: 0;
				padding: 0;
				font-family: 'Open Sans', sans-serif;
				color: #222;
			}

			p {
				line-height: 1.428;
			}

			h1 {
				font-size: 64px;
				line-height: 68px;
				color: #7400ff;
				text-align: right
			}

			h2 {
				font-size: 48px;
				line-height: 48px;
				color: #34495e;
			}

			h3 {
				font-size: 32px;
				line-height: 32px;
				color: #34495e;
				margin-bottom: 6px;
			}

			h4 {

			}

			.cv-record {
				margin-bottom: 16px;
			}

			.cv-record__heading {
				display: flex;
				justify-content: space-between;
			}

			.cv-record__position {
				font-size: 18px;
			}

			.cv-record__dates {
				color: #ccc;
			}

    `}</style>
	</div>
)

export default Layout
