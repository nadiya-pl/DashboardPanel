import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const topCourses = [
  { name: "React", sales: 680, revenue: 13600, profit: 11800 },
  { name: "SQL", sales: 740, revenue: 14800, profit: 13400 },
  { name: "Docker", sales: 530, revenue: 10600, profit: 9200 },
  { name: "Node.js", sales: 620, revenue: 12400, profit: 11050 },
  { name: "C#", sales: 490, revenue: 9800, profit: 8700 },
];


function CoursePerformanceChart() {
    return (
        <div className="chart-container">
            <h2 className="chart-title">Top Courses Overview</h2>

            <div className="chart-wrapper">
				<ResponsiveContainer>
					<BarChart data={topCourses}>
						<CartesianGrid strokeDasharray='3 3' stroke={chartSettings.darkStrokeColor} />
						<XAxis dataKey='name' stroke={chartSettings.strokeColor} />
						<YAxis stroke={chartSettings.strokeColor} />

						<Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />

						<Legend />
						<Bar dataKey='sales' fill='#8b1b3cff' />
						<Bar dataKey='revenue' fill='#a80b96ff' />
						<Bar dataKey='profit' fill='#d78f11ff' />
					</BarChart>
				</ResponsiveContainer>
            </div>
        </div>
    );
}

export default CoursePerformanceChart