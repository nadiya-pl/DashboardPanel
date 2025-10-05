import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const userRetentionData = [
	{ name: "Week 1", retention: 55 },
	{ name: "Week 2", retention: 74 },
	{ name: "Week 3", retention: 85 },
	{ name: "Week 4", retention: 79 },
	{ name: "Week 5", retention: 75 },
	{ name: "Week 6", retention: 81 },
	{ name: "Week 7", retention: 90 },
];


function StudentRetentionChart() {
    return (
        <div className="chart-container">
            <h2 className="chart-title">Student Retention</h2>

            <div className="chart-wrapper">
                <ResponsiveContainer>
					<LineChart data={userRetentionData}>
						<CartesianGrid strokeDasharray='3 3' stroke={chartSettings.darkStrokeColor} />
						<XAxis dataKey='name' stroke={chartSettings.strokeColor} />
						<YAxis stroke={chartSettings.strokeColor} />
						
						<Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />
					
						<Line type='monotone' dataKey='retention' stroke={chartSettings.primaryColor} strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
            </div>
        </div>
    );
}

export default StudentRetentionChart