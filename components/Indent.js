export default ({children}) => (
	<div className="indent">
		{children}

		<style jsx>{`
			.indent {
				padding-left: 48px;
			}
    `}</style>
	</div>
)
