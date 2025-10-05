import './SettingsToggle.css';


function SettingsToggle({ label, isOn, onToggle }) {
  return (
    <div className="toggle-row">
      <span className="toggle-label">{label}</span>
      <button
        className={`toggle-button ${isOn ? "on" : "off"}`}
        onClick={onToggle}
        aria-label={`Toggle ${label}`}
      >
        <span className={`toggle-thumb ${isOn ? "thumb-on" : "thumb-off"}`} />
      </button>
    </div>
  );
}

export default SettingsToggle