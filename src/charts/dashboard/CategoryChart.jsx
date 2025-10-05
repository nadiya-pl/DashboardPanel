import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { chartSettings } from "../../config/chartSettings";


const categoryData = [
  { name: "Web Development", value: 450, color: "#ec7054ff" },
  { name: "UI/UX Design", value: 320, color: "#8B5CF6" },
  { name: "Digital Marketing", value: 280, color: "#EC4899" },
  { name: "Data Science", value: 230, color: "#0e9769ff" },
  { name: "Business", value: 210, color: "#F59E0B" },
];


function CategoryChart() {
   return (
     <div className="chart-container">
         <h2 className="chart-title">Course Category Distribution</h2>
 
         <div className="chart-wrapper">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <PieChart>
                <Pie 
                  data={categoryData}
                  cx={"50%"} cy={"50%"}
                  labelLine={false}
                  outerRadius={80}
                  fill={chartSettings.fillColor}
                  dataKey='value'
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip contentStyle={chartSettings.contentStyle} itemStyle={chartSettings.fontStyle} />
          
              </PieChart>
            </ResponsiveContainer>
          </div>
     </div>
   );
}

export default CategoryChart