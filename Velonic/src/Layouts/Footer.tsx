import { Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer className="footer">
			<Container fluid>
				<Row className="row">
					<div className="col-12 text-center">
						{new Date().getFullYear()} © Velonic - Theme by <b>Techzaa</b>
					</div>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer