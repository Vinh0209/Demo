import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CarRentalIcon from '@mui/icons-material/CarRental';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">CarFlex</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <li>
                <PersonOutlineIcon className="icon"/>
                    <span>Người dùng</span>
                </li>
                <li>
                <TimeToLeaveIcon className="icon"/>
                    <span>Danh sách xe</span>
                </li>
                <li>
                <CarRentalIcon className="icon"/>
                    <span>Thuê xe</span>
                </li>
                <li>
                <CardGiftcardIcon className="icon"/>
                    <span>Voucher</span>
                </li>
                <li>
                <AssessmentOutlinedIcon className="icon"/>
                    <span>Thống kê</span>
                </li>                         
                <li>
                <AccountCircleOutlinedIcon className="icon"/>
                    <span>Hồ sơ</span>
                </li>
                <li>
                <LogoutOutlinedIcon className="icon"/>
                    <span>Đăng xuất</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar