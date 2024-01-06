import { Col, Row } from 'react-bootstrap'
import Statistics from './Statistics'
import WeeklySelesChart from './WeeklySelesChart'
import YearlySelesChart from './YearlySelesChart'
import ChatList from './ChatList'
import Projects from './Projects'

// componets
import { PageBreadcrumb } from '@/components'

// data
import { chatMessages, statistics } from './data'

const Dashboard = () => {
	return (// USERS ORDERS REVENUE DAILY VISITS ## Cards ##
		<>
			<PageBreadcrumb title="Welcome!" subName="Dashboards" />
			<Row>
				{(statistics || []).map((item, idx) => {
					return (
						<Col xxl={3} sm={6} key={idx}>
							<Statistics
								title={item.title}
								stats={item.stats}
								change={item.change}
								icon={item.icon}
								variant={item.variant}
							/>
						</Col>
					)
				})}
			</Row>

			<Row> 
				<Col lg={8}>
					<WeeklySelesChart />
				</Col>
				<Col lg={4}>
					<YearlySelesChart />
				</Col>
			</Row>

			<Row>
				<Col xl={4}>
					<ChatList messages={chatMessages} />
				</Col>

				<Col xl={8}>
					<Projects />
				</Col>
			</Row>
		</>
	)
}
//WeeklySelesChart  YearlySelesChart cards


// Chat & Projects

export default Dashboard
