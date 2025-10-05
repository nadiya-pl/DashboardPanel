import { Users, BarChart2, RotateCcw, DollarSign } from "lucide-react";
import Header from '../components/Header';
import InfoCard from '../pageComponents/cards/InfoCard';
import MonthlyRevenueChart from '../charts/reports/MonthlyRevenueChart';
import CoursePerformanceChart from '../charts/reports/CoursePerformanceChart';
import StudentRetentionChart from '../charts/reports/StudentRetentionChart';
import InfoStatCard from '../pageComponents/cards/InfoStatCard';


function Reports() {
  return (
    <div className="page-container">
      <Header title={"Reports"}/>

      <main className="page-main">
        <div className="charts-stats-grid">
          <InfoStatCard name="Revenue" icon={DollarSign} value="$18,340" percent={8.2} isPositive={true} />
          <InfoStatCard name="New Students" icon={Users} value="264" percent={5.7} isPositive={true} />
          <InfoStatCard name="Course Sales" icon={BarChart2} value="1,130" percent={3.4} isPositive={true} />
          <InfoStatCard name="Refund Requests" icon={RotateCcw} value="12" percent={-1.6} isPositive={false} />
        </div>

        <div className="charts-one-column">
          <MonthlyRevenueChart/>
        </div>
        <div className="charts-two-column">
          <CoursePerformanceChart/>
          <StudentRetentionChart/>
        </div>
        
      </main>
    </div>
  );
}

export default Reports