import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const dailySales = [
	{ name: "Mon", sales: 150 },
	{ name: "Tue", sales: 210 },
	{ name: "Wed", sales: 240 },
	{ name: "Thu", sales: 195 },
	{ name: "Fri", sales: 160 },
	{ name: "Sat", sales: 230 },
	{ name: "Sun", sales: 260 },
];


function WeekChart() {
  	return (
		<div className="chart-container">
			<h2 className="chart-title">Course Sales Overview</h2>

			<div className="chart-wrapper">
				<ResponsiveContainer>
					<BarChart data={dailySales}>
						<CartesianGrid strokeDasharray='3 3' stroke={chartSettings.darkStrokeColor} />
						<XAxis dataKey='name' stroke={chartSettings.strokeColor} />
						<YAxis stroke={chartSettings.strokeColor} />

						<Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />

						<Bar dataKey='sales' fill='#e58320ff' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default WeekChart