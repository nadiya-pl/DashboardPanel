import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { chartSettings } from "../../config/chartSettings";


const monthlySalesData = [
	{ month: "Feb", sales: 3158 },
	{ month: "Mar", sales: 4300 },
	{ month: "Apr", sales: 4900 },
	{ month: "May", sales: 5190 },
	{ month: "Jun", sales: 4700 },
	{ month: "Jul", sales: 4000 },
	{ month: "Aug", sales: 4100 },
];


function OverviewChart() {
	return (
		<div className="chart-container">
			<h2 className="chart-title">Course Sales Overview</h2>

			<div className="chart-wrapper">
				<ResponsiveContainer>
					<AreaChart data={monthlySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke={chartSettings.strokeColor} />
						<XAxis dataKey='month' stroke={chartSettings.strokeColor} />
						<YAxis stroke={chartSettings.strokeColor} />
						
						<Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />

						<Area type='monotone' dataKey='sales' stroke={chartSettings.fillColor} fill={chartSettings.fillColor} fillOpacity={0.25} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default OverviewChart