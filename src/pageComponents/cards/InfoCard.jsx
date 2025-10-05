import { motion } from "framer-motion";
import './InfoCard.css';


function InfoCard({ name, icon: Icon, value, color }) {
  return (
    <motion.div className="info-card" whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
        <div className='card-content'>
            <span className="card-label-text">
                <Icon size={24}  style={{ color,  marginRight: '8px' }} />
					      {name}
            </span>
            <p className='card-value-text'>{value}</p>
        </div>
    </motion.div>
  );
}

export default InfoCard;