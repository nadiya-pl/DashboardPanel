import './SettingsHeader.css';


function SettingsHeader({icon: Icon, text}) {
  return (
      <div className="settings-header">
        {Icon && <Icon size={24} color={"#6c5de2"} className="settings-header-icon" />}
        <h2 className="settings-title">{text}</h2>
      </div>
  )
}

export default SettingsHeader