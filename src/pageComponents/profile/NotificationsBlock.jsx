import { BellRing  } from "lucide-react";
import SettingsHeader from "./SettingsHeader"
import SettingsToggle from './SettingsToggle';


function NotificationsBlock() {
  return (
    <div className="settings-container">
      <SettingsHeader icon={BellRing} text="Notifications" />
      <div className="setting-row">
        <div className="setting-left">Push Notifications</div>
        <div className="setting-right">
          <SettingsToggle isOn={true} onToggle={() => {}} />
        </div>
      </div>
      <div className="setting-row">
        <div className="setting-left">Email Notifications</div>
        <div className="setting-right">
          <SettingsToggle isOn={false} onToggle={() => {}} />
        </div>
      </div>
      <div className="setting-row">
        <div className="setting-left">SMS Notifications</div>
        <div className="setting-right">
          <SettingsToggle isOn={true} onToggle={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default NotificationsBlock