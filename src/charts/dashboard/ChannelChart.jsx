import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const saleChannels = [
  { name: "Website", value: 540, color: "#ec7054ff" },
  { name: "Email Campaigns", value: 420, color: "#8B5CF6" },
  { name: "Social Media", value: 360, color: "#EC4899" },
  { name: "Affiliate Partners", value: 290, color: "#0e9769ff" },
  { name: "YouTube Ads", value: 310, color: "#F59E0B" },
  { name: "Webinars", value: 250, color: "#0bcef5ff" },
];


function ChannelChart() {
  return (
    <div className="chart-container">
        <h2 className="chart-title">Sales by Acquisition Channel</h2>

        <div className='chart-wrapper'>
			<ResponsiveContainer>
				<BarChart data={saleChannels}>
					<CartesianGrid strokeDasharray='3 3' stroke={chartSettings.strokeColor} />
					<XAxis dataKey='name' stroke={chartSettings.fontColor} />
					<YAxis stroke={chartSettings.fontColor} />

					<Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />
				
					<Bar dataKey={"value"} fill={chartSettings.fillColor}>
						{saleChannels.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
    </div>
  );
}

export default ChannelChart