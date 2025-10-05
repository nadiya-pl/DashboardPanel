import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const salesData = [
  { name: "Jul", sales: 120 },
  { name: "Aug", sales: 135 },
  { name: "Sep", sales: 160 },
  { name: "Oct", sales: 180 },
  { name: "Nov", sales: 210 },
  { name: "Dec", sales: 250 },
  { name: "Jan", sales: 230 },
  { name: "Feb", sales: 240 },
  { name: "Mar", sales: 280 },
  { name: "Apr", sales: 300 },
  { name: "May", sales: 340 },
  { name: "Jun", sales: 370 },
];


function SalesChart() {
   return (
     <div className="chart-container">
         <h2 className="chart-title">Course Sales Overview</h2>
 
         <div className="chart-wrapper">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke={chartSettings.strokeColor} />
                        <XAxis dataKey={"name"} stroke={chartSettings.strokeColor} />
                        <YAxis stroke={chartSettings.strokeColor} />

                        <Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />

                        <Line
                            type='monotone'
                            dataKey='sales'
                            stroke={chartSettings.primaryColor}
                            strokeWidth={3}
                            dot={{ fill: chartSettings.primaryColor, strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
     </div>
   );
}

export default SalesChart