
import dashboard from './dashboard.module.css';
import DashboardLogo from '../assets/images/dashboard.svg';
import OverviewLogo from '../assets/images/overview.svg';

const Dashboard = () => {

    const selectorVerticalBar = (<div className={dashboard.verticalBar}></div>)


    return (
        <div className={dashboard.container}>
            
            <div className={`${dashboard.heading} ${dashboard.headingDashboard}`}>
                <img src={DashboardLogo} alt="dashboard logo"></img>
                <span className={dashboard.title}>Dashboard</span>
            </div>

            <div className={dashboard.tabs}>
                <div className={`${dashboard.heading} ${dashboard.headingTab} ${dashboard.selectedTab}`}>
                    {selectorVerticalBar}
                    <img src={OverviewLogo} alt="overview logo"></img>
                    <span className={dashboard.tabTitle}>
                        Overview
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;