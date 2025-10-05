import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const monthlyRevenue = [
  { month: "Jan", revenue: 3800, previous: 3500 },
  { month: "Feb", revenue: 4100, previous: 3900 },
  { month: "Mar", revenue: 4500, previous: 4200 },
  { month: "Apr", revenue: 4700, previous: 4600 },
  { month: "May", revenue: 5200, previous: 5000 },
  { month: "Jun", revenue: 6100, previous: 5800 },
  { month: "Jul", revenue: 6500, previous: 6200 },
];


function MonthlyRevenueChart() {
  return (
    <div className="chart-container">
        <h2 className="chart-title">Monthly Revenue Comparison</h2>

        <div className="chart-wrapper">
            <ResponsiveContainer>
                <AreaChart data={monthlyRevenue}>
                    <CartesianGrid strokeDasharray='3 3' stroke={chartSettings.darkStrokeColor} />
                    <XAxis dataKey='month' stroke={chartSettings.strokeColor} />
                    <YAxis stroke={chartSettings.strokeColor} />

                    <Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />

                    <Legend />
                    <Area type='monotone' dataKey='revenue' stroke='#804df6ff' fill='#8B5CF6' fillOpacity={0.3} />
                    <Area type='monotone' dataKey='previous' stroke='#cb20a9ff' fill='#ee78d7ff' fillOpacity={0.3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default MonthlyRevenueChart