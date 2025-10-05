import { motion } from "framer-motion";
import './InfoStatCard.css';


function InfoStatCard({ name, icon: Icon, value, color, percent, isPositive }) {
  return (
    <motion.div className="info-card" whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
      <div className="card-content">
        <div className="card-top-row">
          <div className={`icon-circle ${isPositive ? "positive" : "negative"}`}>
            <Icon size={24} />
          </div>
          <span className="info-card-label-text">{name}</span>
        </div>

        <p className="card-value-text">{value}</p>

        {percent !== undefined && (
          <p className={`card-percent-text ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? "▲" : "▼"} {percent}% <span className="card-subtext">vs last period</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default InfoStatCard