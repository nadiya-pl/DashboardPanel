import Header from '../components/Header';
import HeaderBlock from '../pageComponents/profile/HeaderBlock';
import NotificationsBlock from '../pageComponents/profile/NotificationsBlock';
import SecurityBlock from '../pageComponents/profile/SecurityBlock';
import AppearanceBlock from '../pageComponents/profile/AppearanceBlock';


function Settings() {
  return (
    <div className="page-container">
      <Header title={"Settings"}/>

      <main className="settings-main">
        <HeaderBlock/>
        <NotificationsBlock/>
        <SecurityBlock/>
        <AppearanceBlock/>
      </main>
    </div>
  );
}

export default Settings