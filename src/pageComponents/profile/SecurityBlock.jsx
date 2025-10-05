import { ShieldCheck } from "lucide-react";
import SettingsHeader from "./SettingsHeader"
import SettingsToggle from './SettingsToggle';


function SecurityBlock() {
  return (
    <div className="settings-container">      
      <SettingsHeader icon={ShieldCheck}  text="Security"/>
      <div className="setting-row">
        <div className="setting-left">Two-Factor Authentication</div>
        <div className="setting-right">
          <SettingsToggle isOn={true} onToggle={() => {}} />
        </div>
      </div>
      <div className="setting-row-full">
        <div className="setting-left-full">
            <button className="btn-primary">change password</button>
        </div>
        <div className="setting-right-full">
          <button className="btn-primary"> check all devices </button>
        </div>
      </div>       
    </div>
  );
}

export default SecurityBlock