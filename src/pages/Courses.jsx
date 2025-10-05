import { Award, BookOpen, User, DollarSign } from "lucide-react";
import Header from '../components/Header';
import InfoCard from '../pageComponents/cards/InfoCard';
import CategoryChart from '../charts/dashboard/CategoryChart';
import SalesChart from '../charts/dashboard/SalesChart';
import ChannelChart from '../charts/dashboard/ChannelChart';
import CoursesTable from '../charts/courses/CoursesTable';


function Courses() {
  return (
    <div className="page-container">
      <Header title={"Courses"}/>

      <main className="page-main">
        <div className="charts-stats-grid">
          <InfoCard name="Total Enrollments" icon={User} value="12,430" color="#10B981" />
          <InfoCard name="Active Courses" icon={BookOpen} value="58" color="#6366F1" />
          <InfoCard name="Certificates Issued" icon={Award} value="4,920" color="#F59E0B" />
          <InfoCard name="Monthly Revenue" icon={DollarSign} value="$142,780" color="#EF4444" />
        </div>

        <div className="charts-one-column">
          <CoursesTable/>
        </div>
      </main>
    </div>
  );
}

export default Courses