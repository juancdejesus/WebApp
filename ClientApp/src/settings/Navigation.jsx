
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import Groups2Icon from '@mui/icons-material/Groups2';
import DashboardIcon from '@mui/icons-material/Dashboard';
const NavigationItems = [
        
        { label: "Home", icon: <DashboardIcon />, link: "Home" },
        { label: "Users", icon: <GroupIcon />, link: "Users" },
        { label: "Clients", icon: <Groups2Icon/>, link: "Clients" },
        { label: "Divider" },
        { label: "Inbox", icon: <InboxIcon />, link: "Inbox" },
        { label: "Edit Table", icon: <MailIcon />, link: "Table" },    
        { label: "Divider" },
        { label: "Form", icon: <BarChartIcon />, link: "Form" },
        { label: "Profile", icon: <PersonIcon />, link: "Profile" },
        { label: "Divider" },
    ];

export default NavigationItems;