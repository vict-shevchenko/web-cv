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
			}
    `}</style>

		<style jsx global>{`
			html {
				font-size: 18px;
			}

			a, div {
				box-sizing: border-box;
			}

      body {
				margin: 0;
				padding: 0;
				font-family: 'Lato', sans-serif;
				color: #222;
			}
			
			a, a:focus, a:visited {
				color: #f54b5e;
				text-decoration: none;
			}

			a:hover {
				text-decoration: underline;
			}


			p {
				line-height: 1.428;
				margin-top: 0.5em;
			}

			h1, h2 {
				color: #7400ff;
			}

			h1 {
				font-size: 64px;
				line-height: 68px;
			}

			h2 {
				font-size: 44px;
				line-height: 44px;
				font-weight: 300;
			}

			h3 {
				font-size: 32px;
				line-height: 32px;
				color: #34495e;
				margin-bottom: 6px;
			}

			h4 {
				font-size: 22px;
				margin-top: 1em;
				margin-bottom: 0;
			}

			.cv-record {
				margin-top: 32px;
			}

			.cv-record__heading {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.cv-record__position {
				flex: 1 0 60%;
			}

			.cv-record__dates {
				color: #ccc;
			}

    `}</style>
	</div>
)

export default Layout
