import { Settings  } from "lucide-react";
import { useState } from "react";
import SettingsHeader from './SettingsHeader';


function AppearanceBlock() {
	const [language, setLanguage] = useState("en");
	return (
		<div className="settings-container">
			<SettingsHeader icon={Settings} text={"Appearance"} />
			<div className="setting-row-full">
				<div className="setting-left-full">Interface Language</div>
				<div className="setting-right-full">
					<select className="setting-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
						<option value="en">English</option>
						<option value="ua">Українська</option>
						<option value="ru">Русский</option>
					</select>
				</div>
			</div>
			<div className="setting-row-full">
				<div className="setting-left-full">Theme</div>
				<div className="setting-right-full">
					<select className="setting-select">
						<option value="dark">Light (default)</option>
						<option value="light">Dark</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default AppearanceBlock