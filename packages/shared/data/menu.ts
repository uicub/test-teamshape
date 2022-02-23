import {
    BarChart2,
    Calendar,
    MessageSquare,
    Users,
    Grid,
    Mail,
    LogIn,
    UserPlus,
    UserCheck,
    ShieldOff,
    User,
    File,
    PieChart,
    Package,
    Layers,
    Box,
    Archive,
    AlertCircle,
    Watch,
} from "react-feather";

const menus = [
    {
        id: 1,
        label: "Dashboard",
        url: "/dashboard",
    },
    {
        id: 2,
        label: "Employees",
        url: "",
        Icon: Box,
        submenu: [
            {
                id: 1,
                label: "Employees",
                url: "/employees",
                Icon: Users,
            },
            {
                id: 2,
                label: "Managers",
                url: "/managers",
                Icon: Watch,
            },
            {
                id: 3,
                label: "Groups",
                url: "/groups",
                Icon: Grid,
            },
        ],
    },
    {
        id: 3,
        label: "Engagement",
        url: "/",
        Icon: Package,
        submenu: [
            {
                id: 21,
                label: "Pulse Surveys",
                url: "/surveys",
                Icon: Calendar,
            },
            {
                id: 22,
                label: "Personal Assessment",
                url: "/personal-assessment",
                Icon: MessageSquare,
            },
            {
                id: 23,
                label: "Feedbacks",
                url: "/feedbacks",
                Icon: Users,
            },
        ],
    },
];

export default menus;
