
import search from '../../assets/images/search.svg';
import notificationBell from '../../assets/images/notificationBell.svg';
import profile from '../../assets/images/profile.svg';
import topbar from './topBar.module.css'

const TopBar = () => {
    return (
        <div className={topbar.container}>
            <div className={`${topbar.title}`}>Overview</div>
            
            <div className={topbar.profileAndButtons}>
                <div className={topbar.buttons}>
                    <img src={search} alt="search"></img>
                    <img src={notificationBell} alt="notification bell"></img>
                    <div className={topbar.divider}></div>
                </div>

                <div className={topbar.profile}>
                    <div>Vijay</div>
                    <div className={topbar.circle}>
                        <img src={profile} alt="profile"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;