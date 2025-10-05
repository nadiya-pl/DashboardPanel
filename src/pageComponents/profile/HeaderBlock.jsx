import { UserStar  } from "lucide-react";
import SettingsHeader from '../profile/SettingsHeader';
import './HeaderBlock.css';


function HeaderBlock() {
  return (
    <div className="settings-container">        
        <SettingsHeader icon={UserStar} text={"Profile"} />
        <div className="setting-row-full">
            <div className="setting-left-full ">
                <div className="profile-box">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Profile" className="profile-avatar" />
                    <div className="profile-info">
                        <h3 className="profile-name">Natalie Brooks</h3>
                        <p className="profile-email">natalie.brooks@adminpanel.com</p>
                    </div>
                </div>
            </div>
            <div className="setting-right-full">
                <button className="btn-primary">edit profile</button>
            </div>
        </div>
    </div>
  );
}

export default HeaderBlock