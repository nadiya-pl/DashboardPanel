import Header from '../components/Header';
import InfoCard from '../pageComponents/cards/InfoCard';
import { BookOpen, UserPlus, Undo2, BarChart2 } from "lucide-react";
import CategoryChart from '../charts/dashboard/CategoryChart';
import OverviewChart from '../charts/payments/OverviewChart';
import WeekChart from '../charts/payments/WeekChart';


function Payments() {
  return (
    <div className="page-container">
      <Header title={"Payments"}/>

      <main className="page-main">
        <div className="charts-stats-grid">
          <InfoCard name="Courses Sold" icon={BookOpen} value="3,482" color="#6366F1" />
          <InfoCard name="New Paying Users" icon={UserPlus} value="764" color="#10B981" />
          <InfoCard name="Refund Requests" icon={Undo2} value="37" color="#F59E0B" />
          <InfoCard name="Upsell Conversion" icon={BarChart2} value="16.3%" color="#EF4444" />
        </div>

        <div className="charts-one-column">
          <OverviewChart/>
        </div>
        <div className="charts-two-column">     
          <WeekChart/>     
          <CategoryChart/>          
        </div>
        
      </main>
    </div>
  );
}

export default Payments