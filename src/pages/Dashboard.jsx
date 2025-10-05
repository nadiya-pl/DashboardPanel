import { Repeat, BookOpen, User, Zap } from "lucide-react";
import Header from '../components/Header';
import InfoCard from '../pageComponents/cards/InfoCard';
import CategoryChart from '../charts/dashboard/CategoryChart';
import SalesChart from '../charts/dashboard/SalesChart';
import ChannelChart from '../charts/dashboard/ChannelChart';


function Dashboard() {
  return (
    <div className="page-container">
      <Header title={"Dashboard"}/>

      <main className="page-main">
        <div className="charts-stats-grid">
          <InfoCard name="Total Revenue" icon={Zap} value="$74,300" color="#6366F1" />
          <InfoCard name="Total Students" icon={User} value="1,245" color="#10B981" />
          <InfoCard name="Courses Published" icon={BookOpen} value="37" color="#F59E0B" />
          <InfoCard name="Active Subscriptions" icon={Repeat} value="892" color="#EF4444" />
        </div>

        <div className="charts-two-column">
          <SalesChart />
          <CategoryChart/>
        </div>
        <div className="charts-one-column">
          <ChannelChart/>
        </div>
      </main>
    </div>
  );
}

export default Dashboard